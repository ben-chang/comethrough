angular.module('comethrough')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'User'];
function UsersShowCtrl(CurrentUserService, User) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;

  vm.changeStatus = changeStatus;

  function changeStatus() {
    let statusBoolean;
    if (vm.user.comethroughStatus === false) {
      statusBoolean = true;
    } else {
      statusBoolean = false;
    }
    User.update({ id: vm.user.id }, {comethroughStatus: statusBoolean})
      .$promise
      .then((data) => {
        vm.user = data;
        vm.user.comethroughStatus = statusBoolean;
      });
  }

}
