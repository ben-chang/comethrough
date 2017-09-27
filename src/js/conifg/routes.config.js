angular.module('comethrough')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('splash', {
      url: '/',
      templateUrl: '/js/views/splash.html'
      // controller: 'SplashCtrl',
      // controllerAs: 'splash'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    });

  $urlRouterProvider.otherwise('/');
}
