angular.module('comethrough')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User) {
  const vm = this;
  vm.user = {};
  vm.register = register;

  function register() {
    User.register(vm.user)
      .$promise
      .then(data => {
        console.log(data);
      });
  }
}
