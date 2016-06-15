google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'X');
    data.addColumn('number', 'Dogs');

    data.addRows([
        [new Date(2014, 0), 0],
        [new Date(2014, 1), 10],
        [new Date(2014, 2), 23],
        [new Date(2014, 3), 17],
        [new Date(2014, 4), 18]
    ]);

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        },
        colors: ['#a52714']
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}