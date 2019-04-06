var c = document.getElementById("myCanvas").getContext("2d");
var myChart = new Chart(c, {
    type: 'bar',
    data: {
        labels: ['Harris', 'Rogges', 'Saad', 'Javed', 'Nawed', 'AV', 'Janusshan', 'Kishan', 'Pavi', 'Hamza'],
        datasets: [{
            label: 'Percentage Distinguishability from Thannoj',
            data: [75, 98, 96, 96, 82, 90, 92, 90, 90, 90],
            backgroundColor: 'rgba(00, 00, 00, 0.65)',
            borderColor: 'rgba(255, 255, 255, 0.9)',
            borderWidth: 3.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 22,
                    fontColor: 'white'
                },
                gridLines: {
                    color: 'white'
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 22,
                    fontColor: 'white'
                },
                gridLines: {
                    color: 'white'
                }
            }]
        },
        layout: {
            padding: {
                top: 50,
                bottom: 50,
                right: 200,
                left: 200
            }
        },
        title: {
            display: true,
            text: "Thannoj's Distinguishability from Other Group Members",
            fontSize: 25,
            fontColor: 'white'
        },
        legend: {
            display: false
        }
    }
});

var c1 = document.getElementById("myCanvas1").getContext("2d");
var myChart1 = new Chart(c1, {
    type: 'bar',
    data: {
        labels: ['Harris', 'Rogges', 'Saad', 'Javed', 'Nawed', 'AV', 'Janusshan', 'Kishan', 'Pavi', 'Hamza'],
        datasets: [{
            label: 'Percentage Distinguishability from Thannoj',
            data: [70, 67, 70, 72, 71, 74, 68, 70, 65, 73],
            backgroundColor: 'rgba(00, 00, 00, 0.65)',
            borderColor: 'rgba(255, 255, 255, 0.9)',
            borderWidth: 3.5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 22,
                    fontColor: 'white',
                    max: 100
                },
                gridLines: {
                    color: 'white'
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 22,
                    fontColor: 'white'
                },
                gridLines: {
                    color: 'white'
                }
            }]
        },
        layout: {
            padding: {
                top: 50,
                bottom: 50,
                right: 200,
                left: 200
            }
        },
        title: {
            display: true,
            text: "Thannoj's Distinguishability (Sample Size Adjustment)",
            fontSize: 25,
            fontColor: 'white'
        },
        legend: {
            display: false
        }
    }
});