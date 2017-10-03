
(function() { 
    
    function SearchController(menuService , $scope , $stateParams ,  listService) {
      
       var ctrl = this;
       ctrl.menu = menuService.getMenu();
       ctrl.query = $stateParams.query;

       ctrl.filteredarray = [];
       ctrl.list = listService.getList();


    }
    
    angular.module('myApp').controller('SearchController', SearchController);
    
    
    })();