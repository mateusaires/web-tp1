var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'chartContainer',
        backgroundColor:'rgba(255, 255, 255, 0.6)'
    },
    
    title: {
        text: 'Poder de Combate'
    },
    
    subtitle: {
        text: 'Meu poder de combate ao longo dos tempos'
    },
    
    
    yAxis: { //--- Primary yAxis
        title: {
            text: 'Temperature'
        }
    },
    
    xAxis: {
        title:{
            text: 'Anos'
        },
        categories: ['1970', '1975', '1980', '1985', '1990', 
            '1995', '2000', '2005', '2010', '2015']
    },
  

    series: [{
        name: 'Poder de Combate',
        data: [1000, 3000, 12000, 13500, 32540, 38000, 84570, 90000, 140000, 200000]
    },{
        name: 'Mais de 8000!',
        data: [8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000]
    }]

});

var outroChart = new Highcharts.Chart({
    chart: {
        renderTo: 'pieChartContainer',
        backgroundColor:'rgba(255, 255, 255, 0.6)'
    },
    
    plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
    
    title: {
        text: 'Números de mortes'
    },
    
    subtitle: {
        text: 'O que te mata TAMBÉM te fortalece...'
    },

    series: [{
            type: 'pie',
            name: 'Número de Mortes',
            data: [
                ['Seya',6],
                ['Krilin',5],
                ['Piccolo',3],
                ['Vegeta',2],
                ['GOKU (EU!!)',2],
                ['Gohan',1],
                ['Yamcha',1],
                ['Goten',1],
                ['Trunks',1]
            ]
        }]

});