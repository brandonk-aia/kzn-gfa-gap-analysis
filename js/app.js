// ─── SURVEY APP JS ────────────────────────────────────────────────────────────

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PROCESSES = {
    SCM: [
        { id: 'scm-1.1', num: '1.1', name: 'Procurement Planning (>R1M) & Demand Planning (<R1M)' },
        { id: 'scm-1.2.1', num: '1.2.1', name: 'Preparing Quotations (<R30K) and RFQs' },
        { id: 'scm-1.2.2', num: '1.2.2', name: 'Preparing RFPs' },
        { id: 'scm-1.3', num: '1.3', name: 'Contracting' },
        { id: 'scm-1.4', num: '1.4', name: 'Delivery and Sign-off' },
        { id: 'scm-1.5.1', num: '1.5.1', name: 'Contract Management' },
        { id: 'scm-1.5.2', num: '1.5.2', name: 'Contract Variance and Deviations' },
        { id: 'scm-1.6', num: '1.6', name: 'Supplier Evaluations' },
        { id: 'scm-1.7', num: '1.7', name: 'SCM Compliance' },
        { id: 'scm-1.8', num: '1.8', name: 'SCM Policies' },
        { id: 'scm-1.9', num: '1.9', name: 'Asset Management and Disposal' },
        { id: 'scm-1.10', num: '1.10', name: 'Reporting' },
    ],
    Finance: [
        { id: 'fin-1.1', num: '1.1', name: 'Treasury Management – Managing Surplus Cash' },
        { id: 'fin-1.2', num: '1.2', name: 'Treasury Management – Manage and Reconcile Cash Positions' },
        { id: 'fin-1.3', num: '1.3', name: 'Treasury Management – Manage Cash Equivalents' },
        { id: 'fin-1.4', num: '1.4', name: 'Loan Book – Interest Received' },
        { id: 'fin-1.5', num: '1.5', name: 'Equity Improvement' },
        { id: 'fin-1.6', num: '1.6', name: 'Management Fees' },
        { id: 'fin-1.7', num: '1.7', name: 'Other Income' },
        { id: 'fin-2.1', num: '2.1', name: 'Operating Expenditure Procurement' },
        { id: 'fin-2.2', num: '2.2', name: 'Capital Expenditure Procurement' },
        { id: 'fin-3.1', num: '3.1', name: 'Fixed Asset Cycle' },
        { id: 'fin-4.1', num: '4.1', name: 'Planning & Budgeting' },
        { id: 'fin-4.2', num: '4.2', name: 'Resource Allocation' },
        { id: 'fin-5.1', num: '5.1', name: 'Internal Reporting' },
        { id: 'fin-5.2', num: '5.2', name: 'External / Statutory Reporting' },
    ],
    HR: [
        { id: 'hr-1.1', num: '1.1', name: 'Recruitment and Selection' },
        { id: 'hr-1.2', num: '1.2', name: 'Onboarding' },
        { id: 'hr-2.1', num: '2.1', name: 'Performance Management' },
        { id: 'hr-2.2', num: '2.2', name: 'Learning and Development' },
        { id: 'hr-3.1', num: '3.1', name: 'Payroll Administration' },
        { id: 'hr-3.2', num: '3.2', name: 'Employee Benefits Administration' },
        { id: 'hr-4.1', num: '4.1', name: 'Employee Relations and Grievance Management' },
        { id: 'hr-4.2', num: '4.2', name: 'Disciplinary Process' },
        { id: 'hr-5.1', num: '5.1', name: 'HR Reporting and Analytics' },
        { id: 'hr-5.2', num: '5.2', name: 'HR Policy Review and Compliance' },
    ],
    Investment: [
        { id: 'inv-1.1', num: '1.1', name: 'Deal Origination and Pipeline Management' },
        { id: 'inv-1.2', num: '1.2', name: 'Due Diligence' },
        { id: 'inv-1.3', num: '1.3', name: 'Credit and Investment Committee Approval' },
        { id: 'inv-1.4', num: '1.4', name: 'Term Sheet and Legal Agreements' },
        { id: 'inv-1.5', num: '1.5', name: 'Disbursement' },
        { id: 'inv-2.1', num: '2.1', name: 'Portfolio Monitoring and Reporting' },
        { id: 'inv-2.2', num: '2.2', name: 'Loan Repayment and Collections' },
        { id: 'inv-2.3', num: '2.3', name: 'Equity Management and Exits' },
        { id: 'inv-3.1', num: '3.1', name: 'Distressed Portfolio Management' },
        { id: 'inv-3.2', num: '3.2', name: 'Impairment and Write-off Process' },
    ],
    IT: [
        { id: 'it-1.1', num: '1.1', name: 'IT Service Desk and Incident Management' },
        { id: 'it-1.2', num: '1.2', name: 'Change Management' },
        { id: 'it-1.3', num: '1.3', name: 'Problem Management' },
        { id: 'it-2.1', num: '2.1', name: 'IT Infrastructure and Network Management' },
        { id: 'it-2.2', num: '2.2', name: 'Cybersecurity and Access Control' },
        { id: 'it-2.3', num: '2.3', name: 'Backup and Disaster Recovery' },
        { id: 'it-3.1', num: '3.1', name: 'Software Development and Deployment' },
        { id: 'it-3.2', num: '3.2', name: 'Vendor and License Management' },
        { id: 'it-4.1', num: '4.1', name: 'IT Governance and Compliance' },
        { id: 'it-4.2', num: '4.2', name: 'IT Strategy and Planning' },
    ],
    Risk: [
        { id: 'rlc-1.1', num: '1.1', name: 'Enterprise Risk Management' },
        { id: 'rlc-1.2', num: '1.2', name: 'Operational Risk Monitoring' },
        { id: 'rlc-2.1', num: '2.1', name: 'Legal and Contract Review' },
        { id: 'rlc-2.2', num: '2.2', name: 'Litigation Management' },
        { id: 'rlc-3.1', num: '3.1', name: 'Regulatory Compliance Monitoring' },
        { id: 'rlc-3.2', num: '3.2', name: 'Internal Audit Coordination' },
        { id: 'rlc-3.3', num: '3.3', name: 'Policy Review and Governance' },
    ],
    Marketing: [
        { id: 'mkt-1.1', num: '1.1', name: 'Brand Management' },
        { id: 'mkt-1.2', num: '1.2', name: 'Stakeholder Communications' },
        { id: 'mkt-1.3', num: '1.3', name: 'Media and Public Relations' },
        { id: 'mkt-2.1', num: '2.1', name: 'Events Management' },
        { id: 'mkt-2.2', num: '2.2', name: 'Digital and Social Media Management' },
        { id: 'mkt-3.1', num: '3.1', name: 'Marketing Planning and Reporting' },
    ],
    Cosec: [
        { id: 'cosec-1.1', num: '1.1', name: 'Board Meeting Administration' },
        { id: 'cosec-1.2', num: '1.2', name: 'Board Committee Administration' },
        { id: 'cosec-2.1', num: '2.1', name: 'Director Affairs and Induction' },
        { id: 'cosec-2.2', num: '2.2', name: 'Statutory Compliance (CIPC / Companies Act)' },
        { id: 'cosec-3.1', num: '3.1', name: 'Governance Reporting' },
        { id: 'cosec-3.2', num: '3.2', name: 'Policy Register Management' },
    ],
    PMO: [
        { id: 'pmo-1.1', num: '1.1', name: 'Project Management and Governance (Internal)' },
        { id: 'pmo-1.2', num: '1.2', name: 'Office Relocation and Infrastructure Projects Governance' },
        { id: 'pmo-1.3', num: '1.3', name: 'Executive Committee (EXCO) Governance and Document' },
        { id: 'pmo-1.4', num: '1.4', name: 'Integrated Reporting' },
        { id: 'pmo-1.5', num: '1.5', name: 'Annual Performance Plan (APP) Governance and Coordination' },
        { id: 'pmo-1.6', num: '1.6', name: 'Organisational Performance Monitoring and Reporting' },
        { id: 'pmo-1.7', num: '1.7', name: 'Organisational Strategy Governance' },
    ],
};

const DEPT_LABELS = {
    SCM: 'Supply Chain Management', Finance: 'Finance', HR: 'Human Resources',
    Investment: 'Investment & Post-Investment', IT: 'Information Technology',
    Risk: 'Risk, Legal & Compliance', Marketing: 'Marketing & Communications',
    Cosec: 'Company Secretariat', PMO: 'Project Management Office'
};

const GAP_TYPES = [
    { id: 'service_delivery', label: 'Service Delivery', icon: '⚡', color: '#C93E1C', bg: '#FDF1ED', border: '#F0A990', desc: 'Gaps in how services are delivered to internal or external stakeholders' },
    { id: 'automation', label: 'Automation / Tools / Digitisation', icon: '⚙️', color: '#0F5A9E', bg: '#EBF3FC', border: '#8BB8E8', desc: 'Manual steps that could be automated or supported by better tooling' },
    { id: 'productivity', label: 'Productivity', icon: '📈', color: '#0A6B0A', bg: '#EFF6EF', border: '#8CC98C', desc: 'Inefficiencies, bottlenecks, or duplication that reduce output' },
    { id: 'governance', label: 'Governance', icon: '🏛️', color: '#6B119E', bg: '#F5EEF8', border: '#C19FD9', desc: 'Gaps in controls, accountability, policy adherence, or oversight' },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = { dept: null, currentProcId: null, currentGapType: null, responses: {} };

function saveState() { localStorage.setItem('kzngfa_gap_v3', JSON.stringify(state)); }
function loadState() {
    const s = localStorage.getItem('kzngfa_gap_v3');
    if (s) { try { state = JSON.parse(s); } catch (_) {} }
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const PAGES = ['page-intro', 'page-dept', 'page-index', 'page-map', 'page-gap', 'page-summary'];
const STEP_LABELS = ['Step 1 of 6', 'Step 2 of 6', 'Step 3 of 6', 'Step 4 of 6', 'Step 5 of 6', 'Step 6 of 6'];
const PROGRESS = [16.7, 33.3, 50, 66.7, 83.3, 100];

function goTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    const idx = PAGES.indexOf(pageId);
    if (idx >= 0) {
        document.getElementById('step-pill').textContent = STEP_LABELS[idx];
        document.getElementById('progress').style.width = PROGRESS[idx] + '%';
    }
    if (pageId === 'page-index') renderIndex();
    if (pageId === 'page-summary') renderSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── DEPT ─────────────────────────────────────────────────────────────────────
function selectDept(el) {
    document.querySelectorAll('.dept-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById('dept-error').style.display = 'none';
}

function confirmDept() {
    const sel = document.querySelector('.dept-card.selected');
    if (!sel) { document.getElementById('dept-error').style.display = 'block'; return; }
    state.dept = sel.dataset.dept;
    saveState();
    goTo('page-index');
}

// ─── PROCESS INDEX ────────────────────────────────────────────────────────────
function renderIndex() {
    if (!state.dept) return;
    const procs = PROCESSES[state.dept] || [];
    document.getElementById('index-title').textContent = DEPT_LABELS[state.dept] + ' — Processes';
    const withGaps = procs.filter(p => (state.responses[p.id]?.gaps?.length || 0) > 0).length;
    document.getElementById('index-progress-text').textContent = withGaps + ' of ' + procs.length + ' with gaps recorded';
    document.getElementById('proc-index-list').innerHTML = procs.map(p => {
        const gapCount = state.responses[p.id]?.gaps?.length || 0;
        const statusHtml = gapCount > 0
            ? `<span class="proc-status done">${gapCount} gap${gapCount > 1 ? 's' : ''}</span>`
            : `<span class="proc-status">Not started</span>`;
        const activeClass = state.currentProcId === p.id ? ' active-proc' : '';
        const doneClass = gapCount > 0 ? ' done-proc' : '';
        return `<button class="proc-item${activeClass}${doneClass}" onclick="openProc('${p.id}')">
            <span class="proc-num">${p.num}</span>
            <span class="proc-name">${p.name}</span>
            ${statusHtml}
        </button>`;
    }).join('');
}

// ─── OPEN PROCESS ─────────────────────────────────────────────────────────────
function openProc(procId) {
    state.currentProcId = procId;
    saveState();
    const procs = PROCESSES[state.dept];
    const proc = procs.find(p => p.id === procId);
    const idx = procs.findIndex(p => p.id === procId);
    const isLast = idx === procs.length - 1;
    document.getElementById('map-breadcrumb').textContent = DEPT_LABELS[state.dept];
    document.getElementById('map-proc-title').textContent = proc.num + ' — ' + proc.name;
    document.getElementById('map-prev-btn').style.visibility = idx === 0 ? 'hidden' : 'visible';
    document.getElementById('map-next-btn').textContent = isLast ? 'Summary →' : 'Next →';
    loadMap(procId, 'map-container-4');
    renderGapTypeCards();
    goTo('page-map');
}

// ─── HTML MAP ─────────────────────────────────────────────────────────────────
function loadMap(procId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const filePath = (typeof PROCESS_MAP_FILES !== 'undefined' && PROCESS_MAP_FILES[procId]) || null;
    if (!filePath) {
        container.innerHTML = `<div class="map-placeholder"><span class="map-placeholder-icon">🗺️</span><span>No map available for this process.</span><span style="font-size:12px;opacity:.7">Add the file path to process-maps.js</span></div>`;
        return;
    }
    container.innerHTML = '<div class="map-loading">Loading map…</div>';
    const height = containerId === 'map-container-5' ? 360 : 520;
    const iframe = document.createElement('iframe');
    iframe.src = filePath;
    iframe.style.cssText = `width:100%;height:${height}px;border:none;display:block;`;
    iframe.onload = () => {
        try {
            const doc = iframe.contentDocument;
            const style = doc.createElement('style');
            style.textContent = 'header,#panel{display:none!important}';
            doc.head.appendChild(style);
            if (containerId === 'map-container-5') {
                const bridge = doc.createElement('script');
                bridge.textContent = `(function(){
  var timer,cc,ct;
  function chipsText(){return Array.from(cc.querySelectorAll('.chip')).map(function(c){var s=c.querySelector('span:first-child');return s?s.textContent.trim():'';}).filter(Boolean).join(', ');}
  var obs=new MutationObserver(function(mutations){clearTimeout(timer);timer=setTimeout(function(){var inChips=mutations.some(function(m){return cc&&(m.target===cc||cc.contains(m.target));});var text=inChips?chipsText():(ct?ct.textContent.trim():'');window.parent.postMessage({type:'map-step',text:text},'*');},50);});
  function init(){cc=document.getElementById('chip-container');ct=document.getElementById('card-title');if(cc)obs.observe(cc,{childList:true,subtree:true,characterData:true});if(ct)obs.observe(ct,{childList:true,subtree:true,characterData:true});}
  if(document.readyState==='complete')init();else window.addEventListener('load',init);
})();`;
                doc.head.appendChild(bridge);
            }
        } catch (_) {}
    };
    container.innerHTML = '';
    container.appendChild(iframe);
}

// ─── GAP TYPE CARDS ───────────────────────────────────────────────────────────
function renderGapTypeCards() {
    const procId = state.currentProcId;
    const gaps = state.responses[procId]?.gaps || [];
    document.getElementById('gap-types-grid').innerHTML = GAP_TYPES.map(gt => {
        const count = gaps.filter(g => g.type === gt.id).length;
        const countBadge = count > 0
            ? `<span class="gap-type-count has-gaps" style="background:${gt.color}">${count}</span>`
            : `<span class="gap-type-count">0</span>`;
        const activeStyle = count > 0 ? `border-color:${gt.border};background:${gt.bg};` : '';
        return `<div class="gap-type-card" onclick="openGapType('${gt.id}')" style="${activeStyle}">
            ${countBadge}
            <span class="gap-type-icon">${gt.icon}</span>
            <div class="gap-type-label" style="${count > 0 ? 'color:' + gt.color : ''}">${gt.label}</div>
            <div class="gap-type-desc">${gt.desc}</div>
        </div>`;
    }).join('');
}

// ─── OPEN GAP TYPE ────────────────────────────────────────────────────────────
function openGapType(typeId) {
    state.currentGapType = typeId;
    saveState();
    const gt = GAP_TYPES.find(g => g.id === typeId);
    const procs = PROCESSES[state.dept];
    const proc = procs.find(p => p.id === state.currentProcId);
    const idx = procs.findIndex(p => p.id === state.currentProcId);
    const isLast = idx === procs.length - 1;
    document.getElementById('gap-breadcrumb').textContent = DEPT_LABELS[state.dept] + ' › ' + proc.num;
    document.getElementById('gap-proc-title').textContent = proc.name;
    document.getElementById('gap-next-btn').textContent = isLast ? 'Summary →' : 'Next process →';
    document.getElementById('action-next-btn').textContent = isLast ? 'View summary →' : 'Next process →';
    document.getElementById('gap-badge-wrap').innerHTML = `<span class="gt-badge" style="background:${gt.bg};color:${gt.color};border-color:${gt.border}">${gt.icon} ${gt.label}</span>`;
    loadMap(state.currentProcId, 'map-container-5');
    renderGapList();
    clearGapForm();
    document.getElementById('action-bar').style.display = 'none';
    goTo('page-gap');
}

// ─── GAP LIST ─────────────────────────────────────────────────────────────────
function renderGapList() {
    const procId = state.currentProcId;
    const typeId = state.currentGapType;
    const all = state.responses[procId]?.gaps || [];
    const typed = all.filter(g => g.type === typeId);
    const sec = document.getElementById('gap-list-section');
    if (!typed.length) { sec.style.display = 'none'; return; }
    document.getElementById('gap-list-label').textContent = `Recorded gaps (${typed.length})`;
    document.getElementById('gap-list').innerHTML = typed.map(g => {
        const realIdx = all.indexOf(g);
        return `<div class="gap-list-item">
            <div class="gap-list-body">
                <div class="gap-list-step" contenteditable="true" data-proc="${procId}" data-idx="${realIdx}" data-field="step" onblur="saveGapListField(this)">${escH(g.step || '')}</div>
                <div class="gap-list-heading" contenteditable="true" data-proc="${procId}" data-idx="${realIdx}" data-field="heading" onblur="saveGapListField(this)">${escH(g.heading || '')}</div>
                <div class="gap-list-desc" contenteditable="true" data-proc="${procId}" data-idx="${realIdx}" data-field="description" onblur="saveGapListField(this)">${escH(g.description || '')}</div>
                <div class="gap-list-mitigation" contenteditable="true" data-proc="${procId}" data-idx="${realIdx}" data-field="mitigation" onblur="saveGapListField(this)">${escH(g.mitigation || '')}</div>
            </div>
            <button class="btn-icon" title="Remove" onclick="removeGap(${realIdx})">✕</button>
        </div>`;
    }).join('');
    sec.style.display = 'block';
}

// ─── GAP FORM ─────────────────────────────────────────────────────────────────
function clearGapForm() {
    ['gap-step', 'gap-heading', 'gap-desc', 'gap-mitigation'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

function saveGap() {
    const heading = document.getElementById('gap-heading').value.trim();
    const description = document.getElementById('gap-desc').value.trim();
    if (!heading && !description) {
        const h = document.getElementById('gap-heading');
        h.style.borderColor = 'var(--brand)';
        h.focus();
        setTimeout(() => h.style.borderColor = '', 1500);
        return;
    }
    const procId = state.currentProcId;
    const typeId = state.currentGapType;
    if (!state.responses[procId]) state.responses[procId] = { gaps: [] };
    state.responses[procId].gaps.push({
        type: typeId,
        step: document.getElementById('gap-step').value.trim(),
        heading, description,
        mitigation: document.getElementById('gap-mitigation').value.trim(),
    });
    saveState();
    renderGapList();
    clearGapForm();
    const bar = document.getElementById('action-bar');
    bar.style.display = 'flex';
    bar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function removeGap(realIdx) {
    const procId = state.currentProcId;
    if (!state.responses[procId]?.gaps) return;
    state.responses[procId].gaps.splice(realIdx, 1);
    saveState();
    renderGapList();
}

function saveGapListField(el) {
    const procId = el.dataset.proc;
    const idx = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    if (!state.responses[procId]?.gaps[idx]) return;
    state.responses[procId].gaps[idx][field] = el.textContent.trim();
    saveState();
}

// ─── PROCESS NAVIGATION ───────────────────────────────────────────────────────
function procNav(dir) {
    const procs = PROCESSES[state.dept];
    const idx = procs.findIndex(p => p.id === state.currentProcId);
    const next = idx + dir;
    if (next < 0) { goTo('page-index'); return; }
    if (next >= procs.length) { goTo('page-summary'); return; }
    openProc(procs[next].id);
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────────
function renderSummary() {
    if (!state.dept) return;
    const procs = PROCESSES[state.dept];
    let html = `<div class="summary-dept-label">${DEPT_LABELS[state.dept]}</div>`;
    procs.forEach(p => {
        const allGaps = state.responses[p.id]?.gaps || [];
        html += `<div class="summary-proc-row">
            <div class="summary-proc-name"><span style="font-size:11px;color:var(--text3);display:block;margin-bottom:2px">${p.num}</span>${p.name}</div>
            <div class="summary-result">`;
        if (!allGaps.length) {
            html += `<span class="badge badge-grey">No gaps recorded</span>`;
        } else {
            html += `<span class="badge badge-green" style="margin-bottom:10px;display:inline-block">${allGaps.length} gap${allGaps.length !== 1 ? 's' : ''}</span>`;
            GAP_TYPES.forEach(gt => {
                const typed = allGaps.filter(g => g.type === gt.id);
                if (!typed.length) return;
                html += `<div class="summary-type-group"><div class="summary-type-label" style="color:${gt.color}">${gt.icon} ${gt.label}</div><div class="gap-list" style="margin-bottom:8px">`;
                typed.forEach(g => {
                    const realIdx = allGaps.indexOf(g);
                    html += `<div class="gap-list-item">
                        <div class="gap-list-body">
                            <div class="gap-list-step" contenteditable="true" data-proc="${p.id}" data-idx="${realIdx}" data-field="step" onblur="saveSummaryField(this)">${escH(g.step || '')}</div>
                            <div class="gap-list-heading" contenteditable="true" data-proc="${p.id}" data-idx="${realIdx}" data-field="heading" onblur="saveSummaryField(this)">${escH(g.heading || '')}</div>
                            <div class="gap-list-desc" contenteditable="true" data-proc="${p.id}" data-idx="${realIdx}" data-field="description" onblur="saveSummaryField(this)">${escH(g.description || '')}</div>
                            <div class="gap-list-mitigation" contenteditable="true" data-proc="${p.id}" data-idx="${realIdx}" data-field="mitigation" onblur="saveSummaryField(this)">${escH(g.mitigation || '')}</div>
                        </div>
                        <button class="btn-icon" title="Remove" onclick="removeSummaryGap('${p.id}',${realIdx})">✕</button>
                    </div>`;
                });
                html += `</div></div>`;
            });
        }
        html += `</div><button class="btn btn-ghost btn-sm" onclick="openProc('${p.id}')" style="flex-shrink:0;margin-top:4px">Edit</button></div>`;
    });
    document.getElementById('summary-body').innerHTML = html;
}

function saveSummaryField(el) {
    const procId = el.dataset.proc;
    const idx = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    if (!state.responses[procId]?.gaps[idx]) return;
    state.responses[procId].gaps[idx][field] = el.textContent.trim();
    saveState();
}

function removeSummaryGap(procId, idx) {
    if (!state.responses[procId]?.gaps) return;
    state.responses[procId].gaps.splice(idx, 1);
    saveState();
    renderSummary();
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
async function exportXLSX() {
    if (!state.dept) return;
    if (typeof XLSX === 'undefined') { alert('Export library not loaded. Check your internet connection.'); return; }
    const procs = PROCESSES[state.dept];
    const dept = DEPT_LABELS[state.dept];
    const rows = [['Department', 'Process Number', 'Process Name', 'Gap Category', 'Gap #', 'Process Step', 'Gap / Challenge', 'Impact', 'Mitigation / Suggested Solution']];
    procs.forEach(p => {
        const all = state.responses[p.id]?.gaps || [];
        if (!all.length) { rows.push([dept, p.num, p.name, '', '', '', '', '', 'No gaps recorded']); return; }
        all.forEach((g, i) => {
            const gt = GAP_TYPES.find(t => t.id === g.type);
            rows.push([i === 0 ? dept : '', i === 0 ? p.num : '', i === 0 ? p.name : '', gt ? gt.label : g.type, i + 1, g.step || '', g.heading || '', g.description || '', g.mitigation || '']);
        });
    });
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{ wch: 28 }, { wch: 13 }, { wch: 44 }, { wch: 28 }, { wch: 7 }, { wch: 28 }, { wch: 36 }, { wch: 44 }, { wch: 44 }];
    ws['!freeze'] = { xSplit: 0, ySplit: 1 };
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Gap Analysis');
    const cat = [['Gap Category', 'Process Number', 'Process Name', 'Process Step', 'Gap / Challenge', 'Impact', 'Mitigation']];
    GAP_TYPES.forEach(gt => {
        procs.forEach(p => {
            (state.responses[p.id]?.gaps || []).filter(g => g.type === gt.id).forEach(g => cat.push([gt.label, p.num, p.name, g.step || '', g.heading || '', g.description || '', g.mitigation || '']));
        });
    });
    const ws2 = XLSX.utils.aoa_to_sheet(cat);
    ws2['!cols'] = [{ wch: 28 }, { wch: 13 }, { wch: 44 }, { wch: 28 }, { wch: 36 }, { wch: 44 }, { wch: 44 }];
    XLSX.utils.book_append_sheet(wb, ws2, 'By Category');
    const fileName = 'KZNGFA_Gap_Analysis_' + state.dept + '_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    XLSX.writeFile(wb, fileName);
    try {
        const user = await authGetUser();
        if (user) {
            await logDownload(
                user.user_metadata?.full_name || '',
                user.email || '',
                DEPT_LABELS[state.dept] || state.dept,
                fileName
            );
        }
    } catch (_) {}
}

// ─── LOGOUT ───────────────────────────────────────────────────────────────────
async function doLogout() {
    try { await authSignOut(); } catch (_) {}
    window.location.href = 'index.html';
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function escH(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function clearAllData() {
    if (!confirm('This will permanently delete all saved responses. Are you sure?')) return;
    localStorage.removeItem('kzngfa_gap_v3');
    state = { dept: null, currentProcId: null, currentGapType: null, responses: {} };
    goTo('page-intro');
}

// ─── MAP STEP BRIDGE ──────────────────────────────────────────────────────────
window.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'map-step') return;
    const input = document.getElementById('gap-step');
    if (!input) return;
    input.value = e.data.text;
    if (e.data.text) {
        input.classList.add('step-flash');
        setTimeout(() => input.classList.remove('step-flash'), 900);
    }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const session = await authCheckSession();
        if (!session) {
            window.location.href = 'auth.html';
            return;
        }
    } catch (_) {
        window.location.href = 'auth.html';
        return;
    }
    loadState();
    if (state.dept) {
        const card = document.querySelector(`.dept-card[data-dept="${state.dept}"]`);
        if (card) card.classList.add('selected');
    }
});
