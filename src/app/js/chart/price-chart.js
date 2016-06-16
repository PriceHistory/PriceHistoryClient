google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'X');
    data.addColumn('number', 'Price');

    var selectedProductID = document.getElementById('productID').value;
    var result = angular.element(document.getElementById('mainDiv')).scope().getProductPriceHistory(selectedProductID);
    result.then(function (response) {
        var rows = [];
        response.ProductPrices.forEach(function (item, i, arr) {
            console.log(item);
            rows.push([new Date(item.Date), item.Price]);
        });
        data.addRows(rows);
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
    });
};