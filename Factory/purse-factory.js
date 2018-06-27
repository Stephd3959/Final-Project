(function() {
  angular.module('app')
    .factory('PurseFactory', function(DataFactory, $http) {

      return {
        combinedApiCall: combinedApiCall,
      }

      function geturls () {

        var answers = DataFactory.getData();
        var vintage = answers.filter(function(item){
          return item === 'vintage';
        });
        var modern = answers.filter(function(item) {
          return item === 'modern';
        });
        var sporty = answers.filter(function(item) {
          return item === 'sporty';
        });
        var outThere = answers.filter(function(item) {
          return item === 'out-there';
        });

        var sortedAnswers = [vintage, modern, sporty, outThere].sort(function(a, b){
          if(b.length > a.length) return 1;
          if(a.length > b.length) return -1;
          return 0;
        });

        var listingIds = {
          vintage: ["602850085", "619081339", "569511192", "589777780"],
          modern: ["234005835", "590624588", "172172938", "596233114"],
          sporty:  ["620498473", "603089522", "595622097", "568294250"],
          'out-there': ["598092588", "604459730", "232438535", "574644485"]
        }

        return listingIds[sortedAnswers[0][0]];
      }

      function combinedApiCall(){
        var listings = geturls();
        return Promise.all(listings.map(function(id){
          return getListing(id).then(function(url){
            return getImage(id).then(function(src){
              return { url: url, src: src};
            });
          });
        }));
      }


        function getListing(id) {
          var url = `https://openapi.etsy.com/v2/listings/${id}/?api_key=jowounhaqslc53jokskfak7v`;
          return $http.get(url).then(function(response){
            return response.data.results[0].url;
          });
        }

        function getImage(id) {
          var url = `https://openapi.etsy.com/v2/listings/${id}/images/?api_key=jowounhaqslc53jokskfak7v`;
          return $http.get(url).then(function(response){
            return response.data.results[0].url_fullxfull;
          });
        }



    });
})();
