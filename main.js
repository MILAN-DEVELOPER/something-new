var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 0;
    $scope.myFunction = function() {
        $scope.count++;
        if( $scope.count == 11){
           $scope.count = 1}
        }
});

app.controller('myCtrl2',function($scope){
});
app.controller('myCtrl3',function($scope){
});