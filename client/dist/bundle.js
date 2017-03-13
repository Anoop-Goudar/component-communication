'use strict';

(function () {
  angular.module('app', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/dashboard', {
      template: '<dashboard></dashboard>'
    }).otherwise({
      redirectTo: '/dashboard'
    });
  }]);
})();
'use strict';

(function () {
  angular.module('app').component('dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: DashboardController,
    controllerAs: 'vm'
  });

  DashboardController.$inject = [];

  function DashboardController() {
    var vm = this;
    vm.dateRange = {};
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
'use strict';

(function () {
  angular.module('app').component('filter', {
    bindings: {
      dataset: '='
    },
    templateUrl: 'filter-section/filter-section.html',
    controller: FilterController,
    controllerAs: 'vm'
  });

  FilterController.$inject = [];

  function FilterController() {
    var vm = this;
    vm.dataset = [];
    vm.startDate = '';
    vm.endDate = '';
    vm.setDates = setDates;
    function setDates() {
      vm.range = {};
      vm.range.startDate = vm.startDate.toISOString().substring(0, 10);
      vm.range.endDate = vm.endDate.toISOString().substring(0, 10);

      vm.dataset = vm.dataset.filter(function (data) {
        if (vm.range && vm.range.startDate && vm.range.endDate) {
          if (new Date(vm.range.startDate) <= new Date(data.date) && new Date(data.date) <= new Date(vm.range.endDate)) {
            return data;
          }
        }
      });
    }
  }
})();
'use strict';

(function () {
  angular.module('app').component('grid', {
    bindings: {
      src: "=",
      filterBy: "<"
    },
    controller: GridController,
    controllerAs: 'vm',
    templateUrl: 'grid-component/grid-component.html'

  });

  function GridController() {
    var vm = this;
  }
})();
'use strict';

(function () {
  angular.module('app').component('appHeader', {
    templateUrl: 'header/header.html',
    controller: HeaderController,
    controllerAs: 'vm'
  });

  HeaderController.$inject = ['$rootScope', '$location'];

  function HeaderController($rootScope, $location) {
    var vm = this;
    vm.menu = $location.path().slice(1);

    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
      vm.menu = $location.path().slice(1);
    });
  }
})();