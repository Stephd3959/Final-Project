(function() {
  angular.module('app')
    .controller('PurseResultsCtrl', function(PurseFactory, $timeout, DataFactory) {
      var $ctrl = this;
      
      $ctrl.reset = function (){
        DataFactory.answers = [];
      }

      PurseFactory.combinedApiCall().then(function(result){
        $timeout($ctrl.etsyresults = result);
      })

    });
})();
