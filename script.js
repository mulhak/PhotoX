$(window).scroll(function(){
    let position= $(this).scrollTop();
    if(position >=200){

        $('.nav-menu').addClass('custom-navbar');
    }
        else{
        $('.nav-menu').removeClass('custom-navbar');
        }

    });

    $(window).scroll(function(){
      let position=$(this).scrollTop();
       if (position >=650){
           $('.camera-img').addClass('cameraFromLeft');
           $('.mission-text').addClass('textFromRight');
       }
         else{
             $('.camera-img').removeClass('cameraFromLeft');
             $('.mission-text').removeClass('textFromRight');
         }
});

   
     $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
          $('.filter').show(300);
        } else {
          $('.filter').not('.' + value).hide(300);
          $('.filter').filter('.' + value).show(300);
        }
      });
      $(window).scroll(function(){
        let position= $(this).scrollTop();

        if (position >= 4200){
            $('.card-1').addClass('moveFromLeft');
        } else {
            $('.card-1').removeClass('moveFromLeft')
    }
    });

      


































