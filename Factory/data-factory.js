(function() {
 angular.module('app')
 .factory('DataFactory', function(){
   var answers = [];
      return {

         setData: function(data){
             answers.push(data);

         },

         getData: function(){
             return answers;
         }
         // clear data
     }
 });
})();
