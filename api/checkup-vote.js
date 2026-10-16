// Vercel Serverless Function. Requires UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
const CHOICES = 7;
const countsKey = 'machicare:cep:counts:v1';
const voteKeyPrefix = 'machicare:cep:voted:v1:';
const script = `local ok=redis.call('SET',KEYS[1],'1','NX','EX',31536000); if not ok then return 0 end; redis.call('HINCRBY',KEYS[2],ARGV[1],1); return 1`;
async function command(args) {
  const url=process.env.UPSTASH_REDIS_REST_URL;
  const token=process.env.UPSTASH_REDIS_REST_TOKEN;
  if(!url||!token)throw Error('Redis is not configured');
  const r=await fetch(url,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(args),cache:'no-store'});
  if(!r.ok)throw Error('Redis failed');
  const data=await r.json();if(data.error)throw Error('Redis failed');return data.result;
}
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('X-Content-Type-Options','nosniff');
  try{
    if(req.method==='GET'){
      const raw=await command(['HGETALL',countsKey]);const result=Array(CHOICES).fill(0);
      if(Array.isArray(raw)){for(let i=0;i<raw.length;i+=2){const k=Number(raw[i]);if(Number.isInteger(k)&&k>=0&&k<CHOICES)result[k]=Number(raw[i+1])||0}}
      else if(raw&&typeof raw==='object'){Object.entries(raw).forEach(([k,v])=>{if(/^[0-6]$/.test(k))result[Number(k)]=Number(v)||0})}
      return res.status(200).json({counts:result});
    }
    if(req.method==='POST'){
      const {choice,token}=typeof req.body==='string'?JSON.parse(req.body):req.body||{};
      if(!Number.isInteger(choice)||choice<0||choice>=CHOICES||typeof token!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(token))return res.status(400).json({error:'入力が正しくない'});
      const done=await command(['EVAL',script,'2',voteKeyPrefix+token,countsKey,String(choice)]);
      if(done===0)return res.status(409).json({error:'投票済み'});
      return res.status(200).json({ok:true});
    }
    res.setHeader('Allow','GET, POST');return res.status(405).json({error:'Unsupported method'});
  }catch(e){return res.status(503).json({error:'一時的に利用できない'});}
}
