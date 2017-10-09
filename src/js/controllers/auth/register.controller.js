angular.module('comethrough')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state) {
  const vm = this;
  vm.user = {};
  vm.register = register;

  function register() {
    User.register(vm.user)
      .$promise
      .then((res) => {
        CurrentUserService.getUser();
        console.log(CurrentUserService.currentUser);
        setTimeout(() => {
          $state.go('usersShow', { id: res.data.id });
        }, 50);
      });
  }
}
