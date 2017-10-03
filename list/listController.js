(function() {
        function ListController($stateParams, listService) {
            var ctrl = this;
            ctrl.param = $stateParams.activeMenu;
            ctrl.list = listService.getList();
        }
        angular.module('myApp').controller('ListController', ListController);
})();