(() => {
  angular.module('app')
  .component('grid', {
    templateUrl: 'grid-component/grid-component.html',
    controller: GridController,
    controllerAs: 'vm'
  });

  GridController.$inject = [];

  function GridController() {
    var vm = this;
    vm.name = 'anoop';
    vm.dataset = [];
    vm.dataset = [{
      date: '2015/06/19',
      balance: '5000'
    }, {
      date: '2015/11/16',
      balance: '4000'
    }, {
      date: '2016/03/12',
      balance: '3000'
    }, {
      date: '2016/08/23',
      balance: '2300'
    }, {
      date: '2016/09/30',
      balance: '40000'
    }, {
      date: '2017/02/27',
      balance: '32000'
    }, {
      date: '2017/03/10',
      balance: '10000'
    }];
  }
})();
