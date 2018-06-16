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
            src: "https://i2.cdn.turner.com/money/dam/assets/140716091327-1978-volkswagen-beetle-1024x576.jpg",
            category: "vintage"
          },
          {
            src: "http://st.motortrend.com/uploads/sites/5/2011/01/2011-chrysler-300c-v8-front-three-quarters-drivers-view-pl.jpg?interpolation=lanczos-none&fit=around|660:414",
            category: "modern"
          },
          {
            src: "https://s.aolcdn.com/commerce/autodata/images/USC70PRC011A021001.jpg",
            category: "sporty"
          },
          {
            src: "http://cdn.24.co.za/files/Cms/General/d/6127/7b7e80aff10344bdb4739711d3cde5c7.jpg",
            category: "out-there"
          }
        ]
      },
      1: {
        question: "Pick a fashion icon.",
        images: [
          {
            src: "https://i.pinimg.com/originals/8c/b2/33/8cb233b4f1021161dd47984ca7e92fe9.jpg",
            category: "vintage"
          },
          {
            src: "https://hips.hearstapps.com/toc.h-cdn.co/assets/17/06/meghan-markle-july-2016-4.jpg",
            category: "modern"
          },
          {
            src: "http://www.modayalda.com/wp-content/uploads/2017/08/Gigi-Hadid-athleisure.jpg",
            category: "sporty"
          },
          {
            src: "https://i.pinimg.com/originals/48/89/11/4889113712821021454e90c6bf4d90ce.jpg",
            category: "out-there"
          }
        ]
      },
      2: {
        question: "Pick a cocktail.",
        images: [
          {
            src: "http://www.girlsofto.com/wp-content/uploads/2015/06/Old-Fashioned.jpg",
            category: "vintage"
          },
          {
            src: "http://healthwayri.com/wp-content/uploads/red-wine-large.jpg",
            category: "modern"
          },
          {
            src: "https://www.maxim.com/.image/t_share/MTUzNjkyNTE2MzIxODYzNDI2/gettyimages-10041871.jpg",
            category: "sporty"
          },
          {
            src: "https://media-cdn.tripadvisor.com/media/photo-s/0f/1b/4a/fa/bubblebath-martini.jpg",
            category: "out-there"
          }
        ]
      },
      3: {
        question: "Pick your favorite weekend activity.",
        images: [
          {
            src: "https://cdn1.ichess.net/wp-content/uploads/2011/05/wicker_park_chess.jpg",
            category: "vintage"
          },
          {
            src: "http://theag.ca/wp-content/uploads/2013/08/under-teachers-pic-of-tour-activity.jpg",
            category: "modern"
          },
          {
            src: "https://res-5.cloudinary.com/zozi/image/upload/s--9H-68wXZ--/t_637_w_opt/v1/z/p/deals/9636/widescreen_photos/113435/three-locations-climbing-rock-indoor-for-two",
            category: "sporty"
          },
          {
            src: "https://www.saalbach.com/fotos-event/winter/rave-on-snow/2017/image-thumb__1587126__box-img/Rave_on_Snow_Tobi_Stoffels_Neon_Photography-20171215002354.jpeg",
            category: "out-there"
          }
        ]
      },
      4: {
        question: "Pick a shoe.",
        images: [
          {
            src: "https://desperadoboutique.com/wp-content/uploads/2018/04/jafa-orange-womens-maryjane-shoes-2.png",
            category: "vintage"
          },
          {
            src: "https://i.pinimg.com/originals/46/6c/11/466c1188f06cd6973b8ff7dff40bfdff.jpg",
            category: "modern"
          },
          {
            src: "http://www.ixinhetai.com/images/large/adidas%20classic%20shoes-983jic.jpg",
            category: "sporty"
          },
          {
            src: "https://images.neimanmarcus.com/ca/3/product_assets/X/3/J/U/4/NMX3JU4_mu.jpg",
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
