(function() {
  angular.module('app')
    .controller('PurseResultsCtrl', function($http, DataFactory) {
      var $ctrl = this;
      var a = DataFactory.getData().filter(function(item) {
        return item.startsWith('vintage');
      });
      var b = DataFactory.getData().filter(function(item) {
        return item.startsWith('modern');
      });
      var c = DataFactory.getData().filter(function(item) {
        return item.startsWith('sporty');
      });
      var d = DataFactory.getData().filter(function(item) {
        return item.startsWith('out-there');
      });
      var listingId;
      var imageId;

      if (a.length >= 3) {
        listingId=["605019944","473901377"];
      } else if (b.length >=3) {
        listingId="473901377";
      } else if (c.length >=3) {
        listingId="509856400";
      } else if (d.length >=3) {
        listingId="620098389";
      }
      else {
        // show the basic purses;
      }

      for (i=0; i<listingId.length; i++){

        var urlGet = `https://openapi.etsy.com/v2/listings/${listingId[i]}/?api_key=jowounhaqslc53jokskfak7v`;
        $http.get(urlGet).then(function(response) {
          $ctrl.testurl = response.data.results[0].url;
        });
        var urlImage = `https://openapi.etsy.com/v2/listings/${listingId[i]}/images/1522050662/?api_key=jowounhaqslc53jokskfak7v`;
        $http.get(urlImage).then(function(response) {
          $ctrl.test2url = response.data.results[0].url_170x135;
        });

      };

    });
})();
