angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  $scope.cityInfo = mainSrv.getCityInfo($stateParams.id);
  $scope.allPackages = mainSrv.packageInfo;
});
