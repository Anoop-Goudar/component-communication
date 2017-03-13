(() => {
  angular.module('app')
  .component('grid', {
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
