angular.module('comethrough')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;

  vm.index = index;

  vm.index();

  function index() {
    User.query()
      .$promise
      .then((data) => {
        vm.all = data;
      });
  }

}
