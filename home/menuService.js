
(function() {

    function menuService() {
        var menuServiceObj = {};
        function getMenu() {
            var menu = [
                {
                  "title": "Contacts",
                  "icon": "contacts",
                  "identifier": "contact"
                }, {
                  "title": "Product",
                  "icon": "product",
                  "identifier": "product"
                },
                {
                  "title": "Sales",
                  "icon": "sales",
                  "identifier": "sales"
                }, {
                  "title": "Purchase",
                  "icon": "purchase",
                  "identifier": "purchase"
                },
                {
                  "title": "Shipping",
                  "icon": "shipping",
                  "identifier": "shipping"
                }, {
                  "title": "Inventory",
                  "icon": "inventory",
                  "identifier": "inventory"
                }, {
                  "title": "Production",
                  "icon": "production",
                  "identifier": "production"
                }, {
                  "title": "Financial",
                  "icon": "financial",
                  "identifier": "financial"
                }
              ];
              

            return menu;
        }
        menuServiceObj.getMenu = getMenu;
         return menuServiceObj;
    }
    angular.module('myApp').factory('menuService', menuService);

})();
