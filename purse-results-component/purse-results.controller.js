(function(){
  angular.module('app')
    .controller('PurseResultsCtrl', function($http, DataFactory){
      var $ctrl = this;
      var peppa = "605019944";
      var urlGet = `https://openapi.etsy.com/v2/listings/${peppa}/?api_key=jowounhaqslc53jokskfak7v`;
      $http.get(urlGet).then(function(response) {
        $ctrl.testurl= response.data.results[0].url;
      });
      var urlImage = `https://openapi.etsy.com/v2/listings/${peppa}/images/1522050662/?api_key=jowounhaqslc53jokskfak7v`;
      $http.get(urlImage).then(function(response) {
        $ctrl.test2url= response.data.results[0].url_170x135;
        console.log(DataFactory.getData());
    });
  });
})();
