(function(){
  angular.module('app')
  .controller("Qctrl", function(){
    var $ctrl = this;
    $ctrl.start=0;
    $ctrl.questions = [
      {
        question: "Pick a car.",
        src1: "a",
        src2: "b",
        src3: "c",
        src4: "d"
      },
      {
        question: "Pick a fashion icon.",
        src1: "e",
        src2: "f",
        src3: "g",
        src4: "h"
      },
      {
        question: "Pick your favorite weekend activity.",
        src1: "i",
        src2: "j",
        src3: "k",
        src4: "l"
      },
      {
        question: "Pick a shoe.",
        src1: "m",
        src2: "n",
        src3: "o",
        src4: "p"
      }];
      $ctrl.content= $ctrl.questions[$ctrl.start];

      $ctrl.nextQuestion = function () {
        $ctrl.start = $ctrl.start +1;
        $ctrl.content = $ctrl.questions[$ctrl.start];
      };
  });
})();
