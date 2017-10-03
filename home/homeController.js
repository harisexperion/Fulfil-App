(function() {
      function HomeController(menuService, $scope, $state) {
          var ctrl = this;
          ctrl.menu = menuService.getMenu();
          ctrl.activeMenu = "contact";
  
          function onStateChange(param) {
              $state.go('home.list', {
                  "activeMenu": param
              });
              ctrl.activeMenu = param;
              ctrl.query = '';
              ctrl.isSearch = false;
  
          }
  
          function onQueryChange() {
              ctrl.isSearch = false;
              onSearch();
          }
  
          function onSearch() {
              $state.go('home.search', {
                  "query": ctrl.query
              });
              ctrl.isSearch = true;
          }

          onStateChange("contact");

          ctrl.onStateChange = onStateChange;
          ctrl.onQueryChange = onQueryChange;
          ctrl.onSearch = onSearch;
      }
      angular.module('myApp').controller('HomeController', HomeController);
  })();