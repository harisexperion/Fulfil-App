
(function() { 


var app = angular.module('myApp' , ['ui.router' , 'angular.filter' ]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home', {
						url : '/home',
						templateUrl: 'home/home.html',
						controller: 'HomeController as ctrl',
					}).state('home.list',{
						url : '/list?activeMenu',
						templateUrl: 'list/list.html',
						controller: 'ListController as ctrl',
					}).state('home.search',{
						url : '/search?query',
						templateUrl: 'search/search.html',
						controller: 'SearchController as ctrl',
					})
					;
			
	
  });




})();