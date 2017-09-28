angular.module('comethrough')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User, CurrentUserService) {
  const vm = this;
  vm.user = {};
  vm.register = register;

  function register() {
    User.register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      });
  }
}
