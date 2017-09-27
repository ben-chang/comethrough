angular.module('comethrough')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;
  vm.user = {};
  vm.login = login;

  function login() {
    User.login(vm.user)
      .$promise
      .then(data => {
        console.log(data);
      });
  }
}
