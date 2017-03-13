(() => {
  angular.module('app')
  .component('filter', {
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

      vm.dataset = vm.dataset.filter(function(data) {
          if(vm.range && vm.range.startDate && vm.range.endDate) {
            if(new Date(vm.range.startDate) <= new Date(data.date) && new Date(data.date) <= new Date(vm.range.endDate)) {
              return data;
             }
          }
      });
    }
  }
})();
