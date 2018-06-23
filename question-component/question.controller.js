(function(){
  angular.module('app')
  .controller("Qctrl", function(DataFactory, $location){
    var $ctrl = this;
    $ctrl.start=0;
    $ctrl.questions = {
      0: {
        question: "Pick a car.",
        images: [
          {
            src:"images/car-vintage.jpg " ,
            title: "VW Bug",
            category: "vintage"
          },
          { src: "images/car_modern.jpg",
          title: "Chrysler 300 ",
            category: "modern"
          },
          {
              src: "images/car_sporty.jpg",
              title: "Porsche",
            category: "sporty"
          },
          {

            src: "images/car_OT2.jpg", 
            title: "Honda concept car",
            category: "out-there"
          }
        ]
      },
      1: {
        question: "Pick a fashion icon.",
        images: [
          {

            src: "images/icon_vintage.jpg",
            title: "Audrey Hepburn",
            category: "vintage"
          },
          {
            src: "images/icon_modern.jpg",
            title: "Megan Dutchess of Sussex",
            category: "modern"
          },
          {
            src: "images/icon_sporty.jpg",
            title: "Gigi Hadid",
            category: "sporty"
          },
          {
            src: "images/icon_OT.jpg",
            title: "Lady Gaga",
            category: "out-there"
          }
        ]
      },
      2: {
        question: "Pick a cocktail.",
        images: [
          {
            src: "images/cocktail_vintage.jpg",
            title:"manhattan",
            category: "vintage"
          },
          {
            src: "images/cocktail_modern.jpg",
            title: "Wine",
            category: "modern"
          },
          {
            
            src: "images/cocKtail_sporty.jpg",
            title: "Beer",
            category: "sporty"
          },
          {
            
            src: "images/cocktail_OT2.jpg",
            title: "Bubble Bath Martini",
            category: "out-there"
          }
        ]
      },
      3: {
        question: "Pick your favorite weekend activity.",
        images: [
          {
            
            src: "images/activity_vintage.jpg",
            title: "Chess",
            category: "vintage"
          },
          {
            
            src: "images/activity_modern.jpg",
            title: "Art Museum",
            category: "modern"
          },
          {
            
            src: "images/activity_sporty.jpg" ,
            title: "Rock Climbing",
            category: "sporty"
          },
          {
           
            src: "images/activity_OT.jpg",
            title: "Warehouse Rave Party",
            category: "out-there"
          }
        ]
      },
      4: {
        question: "Pick a shoe.",
        images: [
          {
            
            src: "images/shoe_vintage.jpg",
            title: "Mary Jane",
            category: "vintage"
          },
          {
                        src: "images/shoe_modern.jpg",
            title: "Oxford",
            category: "modern"
          },
          {
            
            src: "images/shoe_sporty.jpg",
            title: "Adidas Superstar",
            category: "sporty"
          },
          {
            
            src: "images/shoe_OT.jpg",
            title: "Stiletto",
            category: "out-there"
          }
        ]
      }
    };
      $ctrl.content= $ctrl.questions[$ctrl.start];


      $ctrl.nextQuestion = function (category) {

        DataFactory.setData(category);
        $ctrl.start = $ctrl.start +1;
        $ctrl.content = $ctrl.questions[$ctrl.start];
        if (!$ctrl.content) {
          $location.path('/purses');
        };
      };

      $ctrl.reset = function (){
        DataFactory.answers = [];
      }
  });
})();
