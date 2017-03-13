(() => {
  angular.module('app')
  .component('filter', {
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
