'use strict';

(() => {
  angular.module('app')
  .component('dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: DashboardController,
    controllerAs: 'vm'
  });

  DashboardController.$inject = [];

  function DashboardController() {
    var vm = this;
    vm.dataset = [];
    vm.dataset = [{
      date: '19/06/2015',
      balance: '5000'
    }, {
      date: '16/11/2015',
      balance: '4000'
    }, {
      date: '12/03/2016',
      balance: '3000'
    }, {
      date: '23/08/2016',
      balance: '2300'
    }, {
      date: '30/09/2016',
      balance: '40000'
    }, {
      date: '27/02/2017',
      balance: '32000'
    }, {
      date: '10/03/2017',
      balance: '10000'
    }];

  }
})();
