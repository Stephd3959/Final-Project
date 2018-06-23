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
            category: "vintage"
          },
          { src: "images/car_modern.jpg",
            category: "modern"
          },
          {
              src: "images/car_sporty.jpg",
           
            category: "sporty"
          },
          {
           
            src: "images/car_OT2.jpg",
            category: "out-there"
          }
        ]
      },
      1: {
        question: "Pick a fashion icon.",
        images: [
          {
            
            src: "images/icon_vintage.jpg",
            category: "vintage"
          },
          {
            // src: "https://hips.hearstapps.com/toc.h-cdn.co/assets/17/06/meghan-markle-july-2016-4.jpg",
            src: "images/icon_modern.jpg",
            category: "modern"
          },
          {
            // src: "http://www.modayalda.com/wp-content/uploads/2017/08/Gigi-Hadid-athleisure.jpg",
            src: "images/icon_sporty.jpg",
            category: "sporty"
          },
          {
            src: "images/icon_OT.jpg",
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
            category: "modern"
          },
          {
            // src: "https://www.maxim.com/.image/t_share/MTUzNjkyNTE2MzIxODYzNDI2/gettyimages-10041871.jpg",
            src: "images/cocKtail_sporty.jpg",
            category: "sporty"
          },
          {
            // src: "https://media-cdn.tripadvisor.com/media/photo-s/0f/1b/4a/fa/bubblebath-martini.jpg",
            src: "images/cocktail_OT2.jpg",
            category: "out-there"
          }
        ]
      },
      3: {
        question: "Pick your favorite weekend activity.",
        images: [
          {
            // src: "https://cdn1.ichess.net/wp-content/uploads/2011/05/wicker_park_chess.jpg",
            src: "images/activity_vintage.jpg",
            category: "vintage"
          },
          {
            // src: "http://theag.ca/wp-content/uploads/2013/08/under-teachers-pic-of-tour-activity.jpg",
            src: "images/activity_modern.jpg",
            category: "modern"
          },
          {
            // src: "https://res-5.cloudinary.com/zozi/image/upload/s--9H-68wXZ--/t_637_w_opt/v1/z/p/deals/9636/widescreen_photos/113435/three-locations-climbing-rock-indoor-for-two",
            src: "images/activity_sporty.jpg" ,
            category: "sporty"
          },
          {
            // src: "https://www.saalbach.com/fotos-event/winter/rave-on-snow/2017/image-thumb__1587126__box-img/Rave_on_Snow_Tobi_Stoffels_Neon_Photography-20171215002354.jpeg",
            src: "images/activity_OT.jpg",
            category: "out-there"
          }
        ]
      },
      4: {
        question: "Pick a shoe.",
        images: [
          {
            // src: "https://desperadoboutique.com/wp-content/uploads/2018/04/jafa-orange-womens-maryjane-shoes-2.png",
            src: "images/shoe_vintage.jpg",
            category: "vintage"
          },
          {
            // src: "https://i.pinimg.com/originals/46/6c/11/466c1188f06cd6973b8ff7dff40bfdff.jpg",
            src: "images/shoe_modern.jpg",
            category: "modern"
          },
          {
            // src: "http://www.ixinhetai.com/images/large/adidas%20classic%20shoes-983jic.jpg",
            src: "images/shoe_sporty.jpg",
            category: "sporty"
          },
          {
            // src: "https://images.neimanmarcus.com/ca/3/product_assets/X/3/J/U/4/NMX3JU4_mu.jpg",
            src: "images/shoe_OT.jpg",
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
  });
})();
