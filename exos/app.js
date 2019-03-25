
var myApp = angular.module('myApp', []);
myApp.controller('Controller',
    function ($scope) {
        $scope.vegetables = [{type: "carotte", price: 2}, {type: "tomate", price: 3}, {type: "poirreau", price: 5}];
        $scope.actions = {
            initNewVegetable: function () {
                $scope.newVegetable = {};
            },
            addTable: function () {
                $scope.newVegetable.id = new Date().getTime();
                $scope.vegetables.push($scope.newVegetable);
                console.log($scope.newVegetable.id);
                $scope.actions.initNewVegetable();
            },
            deleteVegetable: function (idx) {
                console.log("test " + $scope.vegetable.id);
                $scope.vegetables.splice(idx, 1);

                //$scope.newVegetable.id.splice(id,1);
            },
            buttonEdit: function (idx) {
                $scope.editVegetable = angular.copy($scope.vegetables[idx]);
                $scope.editVegetableIdx = idx;
                console.log(idx);
            },

            edit: function () {
                $scope.vegetables[$scope.editVegetableIdx] = $scope.editVegetable;
                $scope.editVegetable = {};
            }
        };

        $scope.actions.initNewVegetable();
    });
