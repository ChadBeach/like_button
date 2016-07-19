function MainController ($scope) {
      $scope.likes = 0;


  $scope.addToPage = function (likes){
      $scope.likes ++;
    }
}

MainController.$inject = ['$scope'];
export { MainController };
