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
'use strict';

(function () {
  angular.module('app').component('filter', {
    bindings: {
      src: "="
    },
    templateUrl: 'filter-section/filter-section.html',
    controller: FilterController,
    controllerAs: 'vm'
  });

  FilterController.$inject = [];

  function FilterController() {
    var vm = this;
  }
})();
'use strict';

(function () {
  angular.module('app').component('grid', {
    bindings: {
      src: "="
    },
    templateUrl: 'grid-component/grid-component.html',
    controller: GridController,
    controllerAs: 'vm'
  });

  GridController.$inject = [];

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