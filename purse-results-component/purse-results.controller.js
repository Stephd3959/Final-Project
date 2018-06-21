(function() {
  angular.module('app')
    .controller('PurseResultsCtrl', function(PurseFactory, $timeout) {
      var $ctrl = this;
      // $ctrl.etsylinks = PurseFactory.geturls();
      // $ctrl.image = PurseFactory.imageurls[0];

      PurseFactory.combinedApiCall().then(function(result){
        $timeout($ctrl.etsyresults = result);
      })

    });
})();
