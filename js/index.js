// ─── HERO TYPING ANIMATION ────────────────────────────────────────────────────
const DEMO_ORGS = [
    'KwaZulu-Natal Growth Fund Agency',
    'Public Sector Organisations',
    'Provincial Government Departments',
    'Development Finance Institutions',
    'State-Owned Enterprises',
];
let _cycleIdx = 0;
const _cycleEl = document.getElementById('hero-cycle');

function _typeText(text, cb) {
    _cycleEl.textContent = '';
    let i = 0;
    const t = setInterval(() => {
        _cycleEl.textContent += text[i++];
        if (i >= text.length) { clearInterval(t); if (cb) setTimeout(cb, 2200); }
    }, 38);
}
function _eraseText(cb) {
    const t = setInterval(() => {
        _cycleEl.textContent = _cycleEl.textContent.slice(0, -1);
        if (!_cycleEl.textContent.length) { clearInterval(t); if (cb) setTimeout(cb, 160); }
    }, 22);
}
function _cycle() {
    _cycleIdx = (_cycleIdx + 1) % DEMO_ORGS.length;
    _eraseText(() => _typeText(DEMO_ORGS[_cycleIdx], _cycle));
}
if (_cycleEl) setTimeout(() => _typeText(DEMO_ORGS[0], _cycle), 600);
