var c2 = document.getElementById("myCanvas2").getContext("2d");
var myChart1 = new Chart(c2, {
    type: 'bar',
    data: {
        labels: ['Harris', 'Rogges', 'Saad', 'Javed', 'Nawed', 'AV', 'Janusshan', 'Kishan', 'Pavi', 'Hamza', 'Thannoj'],
        datasets: [{
            label: 'Vocabulary Size (Words)',
            data: [3719, 26485, 17652, 12266, 5690, 5168, 7489, 11114, 7857, 5779, 2176],
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
            text: "Vocabulary Size (Words)",
            fontSize: 25,
            fontColor: 'white'
        },
        legend: {
            display: false
        }
    }
});

var c3 = document.getElementById("myCanvas3").getContext("2d");
var myChart1 = new Chart(c3, {
    type: 'bar',
    data: {
        labels: ['Harris', 'Rogges', 'Saad', 'Javed', 'Nawed', 'AV', 'Janusshan', 'Kishan', 'Pavi', 'Hamza', 'Thannoj'],
        datasets: [{
            label: 'Vocabulary Size: Message Count Ratio',
            data: [0.81, 0.27, 0.40, 0.31, 0.68, 0.31, 0.33, 0.69, 0.45, 0.35, 1.16],
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
                    max: 1.2
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
            text: "Vocabulary Size: Message Count Ratio",
            fontSize: 25,
            fontColor: 'white'
        },
        legend: {
            display: false
        }
    }
});