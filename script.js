let currentProvince = 'kp';
let currentMetric = 'extent';

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    updateDistrictList();
    populateKPIs();
});

function initCharts() {
    // 1. Province Chart (Total vs Agricultural Flooding) - STACKED
    const ctxProvince = document.getElementById('provinceChart').getContext('2d');
    new Chart(ctxProvince, {
        type: 'bar',
        data: {
            labels: ['Punjab', 'Sindh', 'KP'],
            datasets: [
                {
                    label: 'Agricultural Flooded Area (km²)',
                    data: [
                        FLOOD_DATA.provinces.punjab.agriFloodedArea,
                        FLOOD_DATA.provinces.sindh.agriFloodedArea,
                        FLOOD_DATA.provinces.kp.agriFloodedArea
                    ],
                    backgroundColor: '#10b981', // Green for agriculture
                    borderRadius: 4
                },
                {
                    label: 'Other Flooded Area (km²)',
                    data: [
                        FLOOD_DATA.provinces.punjab.floodExtent - FLOOD_DATA.provinces.punjab.agriFloodedArea,
                        FLOOD_DATA.provinces.sindh.floodExtent - FLOOD_DATA.provinces.sindh.agriFloodedArea,
                        FLOOD_DATA.provinces.kp.floodExtent - FLOOD_DATA.provinces.kp.agriFloodedArea
                    ],
                    backgroundColor: '#5367a7ff', // Brighter light blue for visibility
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { color: '#94a3b8', padding: 20 }
                }
            }
        }
    });

    // 2. Crop Chart (Combined)
    const ctxCrop = document.getElementById('cropChart').getContext('2d');
    new Chart(ctxCrop, {
        type: 'polarArea',
        data: {
            labels: ['Rice', 'Cotton', 'Sugarcane', 'Maize'],
            datasets: [{
                data: [FLOOD_DATA.cropsCombined.rice, FLOOD_DATA.cropsCombined.cotton, FLOOD_DATA.cropsCombined.sugarcane, FLOOD_DATA.cropsCombined.maize],
                backgroundColor: ['rgba(0, 119, 182, 0.6)', 'rgba(255, 159, 28, 0.6)', 'rgba(231, 29, 54, 0.6)', 'rgba(16, 185, 129, 0.6)'],
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { r: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { display: false } } },
            plugins: {
                legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20 } }
            }
        }
    });

    // 3. Recovery Chart
    const ctxRecovery = document.getElementById('recoveryChart').getContext('2d');
    new Chart(ctxRecovery, {
        type: 'bar',
        data: {
            labels: ['National', 'Punjab', 'Sindh', 'KP'],
            datasets: [
                {
                    label: 'Peak (km²)',
                    data: [FLOOD_DATA.national.peakArea, FLOOD_DATA.provinces.punjab.floodExtent, FLOOD_DATA.provinces.sindh.floodExtent, FLOOD_DATA.provinces.kp.floodExtent],
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 4
                },
                {
                    label: 'October (km²)',
                    data: [FLOOD_DATA.national.octoberArea, FLOOD_DATA.provinces.punjab.octoberArea, FLOOD_DATA.provinces.sindh.octoberArea, FLOOD_DATA.provinces.kp.octoberArea],
                    backgroundColor: '#10b981',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
        }
    });
}

function switchProvince(province) {
    currentProvince = province;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find the clicked button from the event or directly
    const targetBtn = Array.from(buttons).find(btn => btn.textContent.toLowerCase() === province.toLowerCase());
    if (targetBtn) targetBtn.classList.add('active');

    updateDistrictList();
}

function updateDistrictList() {
    const listElement = document.getElementById('district-list');
    const metricSelect = document.getElementById('metric-filter');
    currentMetric = metricSelect.value;

    const districts = FLOOD_DATA.provinces[currentProvince].topDistricts[currentMetric];
    let html = '';

    districts.forEach(dist => {
        const unit = currentMetric === 'pop' ? '' : ' km²';
        html += `
            <div class="district-item">
                <span class="district-name">${dist.name}</span>
                <div class="district-meta">
                    <div class="district-value">${dist.value.toLocaleString()}${unit}</div>
                    <div class="district-perc">${dist.percent}% Impact</div>
                </div>
            </div>
        `;
    });

    listElement.innerHTML = html;
}

function populateKPIs() {
    document.getElementById('kpi-total-area').textContent = FLOOD_DATA.national.peakArea.toLocaleString();
    document.getElementById('kpi-agri-area').textContent = FLOOD_DATA.national.totalFloodedAgriculturalArea.toLocaleString();
    document.getElementById('kpi-pop').textContent = (FLOOD_DATA.national.totalPopulationExposed / 1000000).toFixed(2) + 'M';
    document.getElementById('kpi-recovery').textContent = FLOOD_DATA.national.peakToOctoberReduction;
}
