
(function() { 
    
    function HomeController(menuService , $scope , $state ) {
      
       var ctrl = this;
       ctrl.menu = menuService.getMenu();

       ctrl.activeMenu = "contact";
       onStateChange("contact");

       function onStateChange(param) {
         $state.go('home.list' , { "activeMenu" :  param});
         ctrl.activeMenu = param;
       }

       function onSearch() {

        $state.go('home.search' , { "query" :  ctrl.query});
       }
       ctrl.onStateChange = onStateChange;
       ctrl.onSearch = onSearch;




    }
    
    angular.module('myApp').controller('HomeController', HomeController);
    
    
    })();