//TODO: migrar a angular.io
//inspired by Quartz charts...
let app = angular.module('poblacion_mx_App', ['ngResource']);

app.config(['$resourceProvider', ($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.controller('myController', ['$scope', 'dataFactory', 'dpFactory', ($scope, dataFactory, dpFactory) => {

    $scope.data = [];
    getDataForGChart();

    function getDataForGChart() {
        dataFactory.query()
            .then((response) => {
                //llamada a data processing factory que "cura" los datos para google charts
                let APIData = response.data.res;
                let pData = dpFactory.query(APIData);
                $scope.data = pData;
            }, (error) => {
                console.log("Error al inentar curar JSON data" + error);
            });
    }
    //trata de crear un factory estatico para google chart
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable($scope.data);

        let options = {
            title: 'Crecimiento de la Población en México',
            curveType: 'function',
            hAxis: { format: '####' },
            legend: { position: 'bottom' }
        };

        let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
}]);
//reference
app.factory('dataFactory', ['$http', ($http) => {
    let urlBase = '/poblacion';
    let dataFactory = {};

    dataFactory.query = () => {
        return $http.get(urlBase);
    };

    return dataFactory;
}]);
//data processing factory para google charts visualization
app.factory('dpFactory', () => {
    let customDataService = {
        query: (data) => {
            let _docs = [];
            var customArray = new Array();
            _docs = data;

            let il = _docs.length;
            let jl = 2;
            //console.log(il);
            //console.log(response.data[0].periodo);

            for (i = 0; i < il; i++) {
                customArray[i] = new Array();
                for (j = 0; j < jl; j++) {
                    if (j == 0) {
                        customArray[i][j] = parseFloat(_docs[i].periodo);
                    } else if (j == 1) {
                        customArray[i][j] = parseFloat(_docs[i].valor);
                    }
                }
            }
            customArray.unshift(['Año', 'Numero de Habitantes']);
            //console.log(typeof customArray);
            return customArray;
        }
    };
    return customDataService; //regresa el objeto
});