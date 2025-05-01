document.addEventListener('DOMContentLoaded', () => {
    // Income vs. Gym Density Correlation Chart
    const correlationChart = document.getElementById('correlation-chart');
    if (correlationChart) {
        new Chart(correlationChart, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Income vs. Gym Density',
                    data: [
                        { x: 120000, y: 42.5 }, // Upper East Side
                        { x: 105000, y: 36.0 }, // Upper West Side
                        { x: 95000, y: 55.0 },  // Midtown
                        { x: 90000, y: 32.5 },  // Downtown
                        { x: 45000, y: 9.0 }    // Chinatown
                    ],
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Average Income ($)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Gyms per 100,000 People'
                        }
                    }
                }
            }
        });
    }

    // Gym Types Distribution Chart
    const gymTypesChart = document.getElementById('gym-types-chart');
    if (gymTypesChart) {
        new Chart(gymTypesChart, {
            type: 'bar',
            data: {
                labels: ['Luxury', 'Boutique', 'Chain', 'Community', 'Corporate'],
                datasets: [{
                    label: 'High Income Areas',
                    data: [35, 25, 20, 10, 10],
                    backgroundColor: 'rgba(46, 204, 113, 0.6)'
                }, {
                    label: 'Low Income Areas',
                    data: [5, 10, 30, 45, 10],
                    backgroundColor: 'rgba(231, 76, 60, 0.6)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentage (%)'
                        }
                    }
                }
            }
        });
    }

    // Membership Cost Analysis Chart
    const costAnalysisChart = document.getElementById('cost-analysis-chart');
    if (costAnalysisChart) {
        new Chart(costAnalysisChart, {
            type: 'line',
            data: {
                labels: ['Upper East', 'Upper West', 'Midtown', 'Downtown', 'Chinatown'],
                datasets: [{
                    label: 'Average Monthly Membership Cost ($)',
                    data: [200, 180, 150, 120, 40],
                    borderColor: 'rgba(155, 89, 182, 1)',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cost ($)'
                        }
                    }
                }
            }
        });
    }

    // Amenities Comparison Chart
    const amenitiesChart = document.getElementById('amenities-chart');
    if (amenitiesChart) {
        new Chart(amenitiesChart, {
            type: 'radar',
            data: {
                labels: ['Pool', 'Spa', 'Classes', 'Personal Training', 'Equipment Quality', 'Locker Rooms'],
                datasets: [{
                    label: 'High Income Areas',
                    data: [90, 85, 95, 90, 95, 90],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)'
                }, {
                    label: 'Low Income Areas',
                    data: [30, 20, 70, 50, 60, 40],
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // Region Filter Functionality
    const filterBtn = document.getElementById('filter-btn');
    const regionSelect = document.getElementById('region-select');
    const dataDisplay = document.getElementById('filtered-data-display');

    if (filterBtn && regionSelect && dataDisplay) {
        filterBtn.addEventListener('click', () => {
            const selectedRegion = regionSelect.value;
            let data;

            switch (selectedRegion) {
                case 'upper-east':
                    data = {
                        name: 'Upper East Side',
                        income: 120000,
                        gyms: 85,
                        density: 42.5,
                        population: 200000,
                        types: 'Luxury clubs, boutique studios'
                    };
                    break;
                case 'upper-west':
                    data = {
                        name: 'Upper West Side',
                        income: 105000,
                        gyms: 72,
                        density: 36.0,
                        population: 200000,
                        types: 'High-end clubs, community centers'
                    };
                    break;
                case 'midtown':
                    data = {
                        name: 'Midtown',
                        income: 95000,
                        gyms: 110,
                        density: 55.0,
                        population: 200000,
                        types: 'Corporate gyms, chain facilities'
                    };
                    break;
                case 'downtown':
                    data = {
                        name: 'Downtown',
                        income: 90000,
                        gyms: 65,
                        density: 32.5,
                        population: 200000,
                        types: 'Mid-range chains, boutique studios'
                    };
                    break;
                case 'chinatown':
                    data = {
                        name: 'Chinatown',
                        income: 45000,
                        gyms: 18,
                        density: 9.0,
                        population: 200000,
                        types: 'Community centers, budget gyms'
                    };
                    break;
                default:
                    dataDisplay.innerHTML = '<p>Please select a specific region to view detailed data.</p>';
                    return;
            }

            dataDisplay.innerHTML = `
                <h4>${data.name} - Detailed Analysis</h4>
                <div class="data-grid">
                    <div class="data-item">
                        <strong>Average Income:</strong> $${data.income.toLocaleString()}
                    </div>
                    <div class="data-item">
                        <strong>Total Gyms:</strong> ${data.gyms}
                    </div>
                    <div class="data-item">
                        <strong>Gyms per 100k People:</strong> ${data.density}
                    </div>
                    <div class="data-item">
                        <strong>Population:</strong> ${data.population.toLocaleString()}
                    </div>
                    <div class="data-item">
                        <strong>Primary Facility Types:</strong> ${data.types}
                    </div>
                </div>
            `;
        });
    }
}); 