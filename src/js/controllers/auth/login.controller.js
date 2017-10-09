angular.module('comethrough')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;
  vm.user = {};
  vm.login = login;

  function login() {
    User.login(vm.user)
      .$promise
      .then((res) => {
        CurrentUserService.getUser();
        setTimeout(() => {
          $state.go('usersShow', { id: res.data.id });
        }, 50);
      }, (err) => {
        vm.error = err;
      });
  }
}
