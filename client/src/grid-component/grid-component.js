(() => {
  angular.module('app')
  .component('grid', {
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
