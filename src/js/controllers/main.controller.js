angular.module('comethrough')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['CurrentUserService', '$rootScope', '$state'];
function MainCtrl(CurrentUserService, $rootScope, $state) {
  const vm = this;
  vm.logout = logout;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  function logout() {
    CurrentUserService.removeUser();
  }

}
