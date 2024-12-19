$(document).ready(function(){

    $('.switch-chart').each(function(i){
        $(this).on('click',function(){
        
         $(".chart").removeClass("fadeIn").addClass("fadeOut");
         $(".chart").eq(i).removeClass("fadeOut").addClass("fadeIn");
            
            
        });   
    });
    /*charts*/
    Highcharts.chart('chart1', {

    title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
    },

    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation & Developers',
        data: [
            43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610, 168960, 171558
        ]
    }, {
        name: 'Manufacturing',
        data: [
            24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 31050, 33099, 33473
        ]
    }, {
        name: 'Sales & Distribution',
        data: [
            11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663, 28978, 30618
        ]
    }, {
        name: 'Operations & Maintenance',
        data: [
            null, null, null, null, null, null, null,
            null, 11164, 11218, 10077, 12530, 16585
        ]
    }, {
        name: 'Other',
        data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073, 11471, 11648
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('chart2', {
    chart: {
        type: 'spline',
        inverted: true
    },
    title: {
        text: 'Atmosphere Temperature by Altitude'
    },
    subtitle: {
        text: 'According to the Standard Atmosphere Model'
    },
    xAxis: {
        reversed: false,
        title: {
            enabled: true,
            text: 'Altitude'
        },
        labels: {
            format: '{value} km'
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 80 km.'
        },
        maxPadding: 0.05,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        },
        accessibility: {
            rangeDescription: 'Range: -90°C to 20°C.'
        },
        lineWidth: 2
    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
        spline: {
            marker: {
                enable: false
            }
        }
    },
    series: [{
        name: 'Temperature',
        data: [
            [0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
            [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]
        ]

    }]
});
 Highcharts.chart('chart3', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the ' +
                    'chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    }, {
        name: 'Bergen',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the ' +
                    'chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }]
});

Highcharts.chart('chart4', {
    title: {
        text: 'Growth of Internet Users Worldwide (logarithmic scale)'
    },

    accessibility: {
        point: {
            valueDescriptionFormat:
                '{xDescription}{separator}{value} million(s)'
        }
    },

    xAxis: {
        title: {
            text: 'Year'
        },
        categories: [1995, 2000, 2005, 2010, 2015, 2020, 2023]
    },

    yAxis: {
        type: 'logarithmic',
        title: {
            text: 'Number of Internet Users (in millions)'
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: '{point.y} million(s)'
    },

    series: [{
        name: 'Internet Users',
        keys: ['y', 'color'],
        data: [
            [16, '#0000ff'],
            [361, '#8d0073'],
            [1018, '#ba0046'],
            [2025, '#d60028'],
            [3192, '#eb0014'],
            [4673, '#fb0004'],
            [5200, '#ff0000']
        ],
        color: {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 1,
                y2: 0
            },
            stops: [
                [0, '#0000ff'],
                [1, '#ff0000']
            ]
        }
    }]
});
  	
    
Highcharts.chart('chart5', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Wind speed during a day',
        align: 'left'
    },
    subtitle: {
        text: '29th of February, 2024 at two locations in Vik i Sogn, Norway',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Light air',
                style: {
                    color: '#606060'
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Light breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Gentle breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Moderate breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Fresh breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Strong breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Near Gale
            from: 14,
            to: 17,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Near gale',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh Gale
            from: 17,
            to: 20.5,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Fresh gale',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong Gale
            from: 20.5,
            to: 24,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Strong gale',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: '2014-02-29'
        }
    },
    series: [{
        name: 'Hestavollane',
        data: [
            12.9, 13.8, 10.2, 8.4, 10.0, 9.2, 10.0,
            12.2, 13.2, 12.7, 12.5, 11.4, 10.4,
            7.9, 8.0, 11.4, 11.5, 12.0, 12.0,
            10.4, 11.2, 11.5, 12.2, 11.5, 8.3
        ]

    }, {
        name: 'Vik',
        data: [
            null, 1.3, 1.1, 0.8, 1.8, 1.7, 0.8,
            0.8, 1.0, 1.0, 1.0, 0.8, 1.4,
            1.3, 2.9, 6.1, 6.4, 6.6, 6.4,
            6.3, 5.4, 3.9, 3.0, 1.7, 1.4
        ]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});    
    
    
    
function getData(n) {
    const arr = [];
    let i,
        x,
        a,
        b,
        c,
        spike;
    for (
        i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
        i < n;
        i = i + 1, x = x + 36e5
    ) {
        if (i % 100 === 0) {
            a = 2 * Math.random();
        }
        if (i % 1000 === 0) {
            b = 2 * Math.random();
        }
        if (i % 10000 === 0) {
            c = 2 * Math.random();
        }
        if (i % 50000 === 0) {
            spike = 10;
        } else {
            spike = 0;
        }
        arr.push([
            x,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
        ]);
    }
    return arr;
}
const n = 500000,
    data = getData(n);


console.time('line');
Highcharts.chart('chart6', {

    chart: {
        zooming: {
            type: 'x'
        }
    },

    title: {
        text: 'Highcharts drawing ' + n + ' points',
        align: 'left'
    },

    subtitle: {
        text: 'Using the Boost module',
        align: 'left'
    },

    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<{headingTagName}>' +
                '{chartTitle}</{headingTagName}><div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>' +
                '{yAxisDescription}</div>'
        }
    },

    tooltip: {
        valueDecimals: 2
    },

    xAxis: {
        type: 'datetime'
    },

    series: [{
        data: data,
        lineWidth: 0.5,
        name: 'Hourly data points'
    }]

});
console.timeEnd('line');
    
    
    
    
    
    // Data retrieved from https://www.vikjavev.no/ver/snjomengd

Highcharts.chart('chart7', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            // don't display the year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Snow depth (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
        series: {
            marker: {
                symbol: 'circle',
                fillColor: '#FFFFFF',
                enabled: true,
                radius: 2.5,
                lineWidth: 1,
                lineColor: null
            }
        }
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis.
    series: [
        {
            name: 'Winter 2021-2022',
            data: [
                ['1970-11-05', 0],
                ['1970-11-12', 0.1],
                ['1970-11-21', 0.15],
                ['1970-11-22', 0.19],
                ['1970-11-27', 0.17],
                ['1970-11-30', 0.27],
                ['1970-12-02', 0.25],
                ['1970-12-04', 0.27],
                ['1970-12-05', 0.26],
                ['1970-12-06', 0.25],
                ['1970-12-07', 0.26],
                ['1970-12-08', 0.26],
                ['1970-12-09', 0.25],
                ['1970-12-10', 0.25],
                ['1970-12-11', 0.25],
                ['1970-12-12', 0.26],
                ['1970-12-22', 0.22],
                ['1970-12-23', 0.22],
                ['1970-12-24', 0.22],
                ['1970-12-25', 0.24],
                ['1970-12-26', 0.24],
                ['1970-12-27', 0.24],
                ['1970-12-28', 0.24],
                ['1970-12-29', 0.24],
                ['1970-12-30', 0.22],
                ['1970-12-31', 0.18],
                ['1971-01-01', 0.17],
                ['1971-01-02', 0.23],
                ['1971-01-09', 0.5],
                ['1971-01-10', 0.5],
                ['1971-01-11', 0.53],
                ['1971-01-12', 0.48],
                ['1971-01-13', 0.4],
                ['1971-01-17', 0.36],
                ['1971-01-22', 0.69],
                ['1971-01-23', 0.62],
                ['1971-01-29', 0.72],
                ['1971-02-02', 0.95],
                ['1971-02-10', 1.73],
                ['1971-02-15', 1.76],
                ['1971-02-26', 2.18],
                ['1971-03-02', 2.22],
                ['1971-03-06', 2.13],
                ['1971-03-08', 2.11],
                ['1971-03-09', 2.12],
                ['1971-03-10', 2.11],
                ['1971-03-11', 2.09],
                ['1971-03-12', 2.08],
                ['1971-03-13', 2.08],
                ['1971-03-14', 2.07],
                ['1971-03-15', 2.08],
                ['1971-03-17', 2.12],
                ['1971-03-18', 2.19],
                ['1971-03-21', 2.11],
                ['1971-03-24', 2.1],
                ['1971-03-27', 1.89],
                ['1971-03-30', 1.92],
                ['1971-04-03', 1.9],
                ['1971-04-06', 1.95],
                ['1971-04-09', 1.94],
                ['1971-04-12', 2],
                ['1971-04-15', 1.9],
                ['1971-04-18', 1.84],
                ['1971-04-21', 1.75],
                ['1971-04-24', 1.69],
                ['1971-04-27', 1.64],
                ['1971-04-30', 1.64],
                ['1971-05-03', 1.58],
                ['1971-05-06', 1.52],
                ['1971-05-09', 1.43],
                ['1971-05-12', 1.42],
                ['1971-05-15', 1.37],
                ['1971-05-18', 1.26],
                ['1971-05-21', 1.11],
                ['1971-05-24', 0.92],
                ['1971-05-27', 0.75],
                ['1971-05-30', 0.55],
                ['1971-06-03', 0.35],
                ['1971-06-06', 0.21],
                ['1971-06-09', 0]
            ]
        },
        {
            name: 'Winter 2022-2023',
            data: [
                ['1970-11-03', 0],
                ['1970-11-09', 0],
                ['1970-11-12', 0.03],
                ['1970-11-15', 0],
                ['1970-11-24', 0],
                ['1970-11-27', 0.06],
                ['1970-11-30', 0.05],
                ['1970-12-03', 0.05],
                ['1970-12-06', 0.07],
                ['1970-12-09', 0.09],
                ['1970-12-15', 0.09],
                ['1970-12-18', 0.13],
                ['1970-12-21', 0.17],
                ['1970-12-24', 0.32],
                ['1970-12-27', 0.62],
                ['1971-01-03', 0.60],
                ['1971-01-09', 0.63],
                ['1971-01-12', 0.74],
                ['1971-01-15', 0.80],
                ['1971-01-18', 0.97],
                ['1971-01-21', 0.87],
                ['1971-01-24', 0.98],
                ['1971-01-27', 0.87],
                ['1971-01-30', 0.98],
                ['1971-02-03', 1.09],
                ['1971-02-06', 1.24],
                ['1971-02-09', 1.26],
                ['1971-02-12', 1.21],
                ['1971-02-15', 1.12],
                ['1971-02-18', 1.35],
                ['1971-02-21', 1.65],
                ['1971-02-24', 1.64],
                ['1971-02-27', 1.58],
                ['1971-03-03', 1.55],
                ['1971-03-06', 1.62],
                ['1971-03-09', 1.55],
                ['1971-03-12', 1.69],
                ['1971-03-15', 1.70],
                ['1971-03-18', 1.95],
                ['1971-03-21', 1.91],
                ['1971-03-27', 2.08],
                ['1971-03-30', 2.17],
                ['1971-04-03', 2.09],
                ['1971-04-12', 2.04],
                ['1971-04-15', 1.91],
                ['1971-04-18', 1.93],
                ['1971-04-21', 1.79],
                ['1971-04-24', 1.72],
                ['1971-04-27', 1.79],
                ['1971-05-03', 1.74],
                ['1971-05-06', 1.66],
                ['1971-05-09', 1.56],
                ['1971-05-12', 1.37],
                ['1971-05-15', 1.20],
                ['1971-05-18', 1.18],
                ['1971-05-21', 0.93],
                ['1971-05-24', 0.77],
                ['1971-05-27', 0.63],
                ['1971-05-30', 0.47],
                ['1971-06-03', 0.22],
                ['1971-06-06', 0.0]
            ]
        },
        {
            name: 'Winter 2023-2024',
            data: [
                ['1970-10-10', 0],
                ['1970-11-18', 0.2],
                ['1970-11-21', 0.08],
                ['1970-11-25', 0.60],
                ['1970-12-03', 0.11],
                ['1970-12-06', 0.49],
                ['1970-12-18', 0.38],
                ['1970-12-21', 0.70],
                ['1970-12-25', 0.81],
                ['1970-12-30', 0.77],
                ['1971-01-09', 0.65],
                ['1971-01-12', 0.71],
                ['1971-01-21', 0.86],
                ['1971-01-24', 1.07],
                ['1971-01-27', 1.19],
                ['1971-01-30', 1.12],
                ['1971-02-03', 1.31],
                ['1971-02-06', 1.43],
                ['1971-02-09', 1.33],
                ['1971-02-12', 1.41],
                ['1971-02-15', 1.49],
                ['1971-02-18', 1.46],
                ['1971-02-21', 1.55],
                ['1971-02-24', 1.58],
                ['1971-02-27', 1.61],
                ['1971-03-03', 1.80],
                ['1971-03-06', 1.64],
                ['1971-03-15', 1.66],
                ['1971-03-16', 1.91],
                ['1971-03-21', 1.86],
                ['1971-03-23', 2.08],
                ['1971-03-31', 2.01],
                ['1971-04-11', 1.86],
                ['1971-04-15', 1.82],
                ['1971-04-19', 1.81],
                ['1971-04-25', 1.79],
                ['1971-05-05', 1.43],
                ['1971-05-08', 1.13],
                ['1971-05-12', 0.98],
                ['1971-05-15', 0.71],
                ['1971-05-18', 0.50],
                ['1971-05-21', 0.28],
                ['1971-05-24', 0.09],
                ['1971-05-25', 0.0]
            ]
        }
    ]
});

Highcharts.chart('chart8', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: 'Image description: An area chart compares the nuclear ' +
            'stockpiles of the USA and the USSR/Russia between 1945 and ' +
            '2024. The number of nuclear weapons is plotted on the Y-axis ' +
            'and the years on the X-axis. The chart is interactive, and the ' +
            'year-on-year stockpile levels can be traced for each country. ' +
            'The US has a stockpile of 2 nuclear weapons at the dawn of the ' +
            'nuclear age in 1945. This number has gradually increased to 170 ' +
            'by 1949 when the USSR enters the arms race with one weapon. At ' +
            'this point, the US starts to rapidly build its stockpile ' +
            'culminating in 31,255 warheads by 1966 compared to the USSR’s 8,' +
            '400. From this peak in 1967, the US stockpile gradually ' +
            'decreases as the USSR’s stockpile expands. By 1978 the USSR has ' +
            'closed the nuclear gap at 25,393. The USSR stockpile continues ' +
            'to grow until it reaches a peak of 40,159 in 1986 compared to ' +
            'the US arsenal of 24,401. From 1986, the nuclear stockpiles of ' +
            'both countries start to fall. By 2000, the numbers have fallen ' +
            'to 10,577 and 12,188 for the US and Russia, respectively. The ' +
            'decreases continue slowly after plateauing in the 2010s, and in ' +
            '2024 the US has 3,708 weapons compared to Russia’s 4,380.'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
            'target="_blank">FAS</a>'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2024.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
            'warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
            1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
            28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
            26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
            23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
            21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
            10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
            5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
            3750, 3708, 3708, 3708, 3708
        ]
    }, {
        name: 'USSR/Russia',
        data: [
            null, null, null, null, null, null, null, null, null,
            1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
            3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
            14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
            32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
            32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
            13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
            5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
            4310, 4495, 4477, 4489, 4380
        ]
    }]
});

 // Data retrieved from https://www.ssb.no/statbank/table/10467/
Highcharts.chart('chart9', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Born persons, by boys\' name'
    },
    subtitle: {
        text: '* Missing data for Yasin in 2019',
        align: 'right',
        verticalAlign: 'bottom'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 60,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    yAxis: {
        title: {
            text: 'Amount'
        }
    },
    plotOptions: {
        series: {
            pointStart: 2016
        },
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Arvid',
        data: [11, 11, 8, 13, 12, 14, 4, 12]
    }, {
        name: 'Yasin',
        data: [10, 10, 8, null, 8, 6, 4, 8]
    }]
});   
    
    
    
    
    
});