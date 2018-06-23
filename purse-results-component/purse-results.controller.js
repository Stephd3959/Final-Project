(function() {
  angular.module('app')
    .controller('PurseResultsCtrl', function(PurseFactory, $timeout) {
      var $ctrl = this;

      PurseFactory.combinedApiCall().then(function(result){
        $timeout($ctrl.etsyresults = result);
      })

    });
})();
