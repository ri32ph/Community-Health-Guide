(function () {
  const links = Array.from(document.querySelectorAll('[data-stage]'));
  const panels = Array.from(document.querySelectorAll('[data-panel]'));
  function show(id, focus) {
    if (!panels.some(panel => panel.dataset.panel === id)) return;
    panels.forEach(panel => { panel.hidden = panel.dataset.panel !== id; });
    links.forEach(link => {
      const active = link.dataset.stage === id;
      if (active) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    if (focus) document.getElementById('stage-' + id).focus({ preventScroll: true });
  }
  function fromHash() {
    const id = location.hash.replace(/^#stage-/, '');
    if (panels.some(panel => panel.dataset.panel === id)) show(id, false);
  }
  show('diagnosis', false);
  fromHash();
  links.forEach(link => link.addEventListener('click', () => show(link.dataset.stage, true)));
  window.addEventListener('hashchange', fromHash);
})();
