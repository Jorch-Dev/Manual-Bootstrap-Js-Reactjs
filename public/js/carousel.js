$(document).ready(function () {
    $('#carruselvideos').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:4,
                nav:false
            }
        }
    })
  });



  $(document).ready(function () {
    $('#carruselpodcast').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:4,
                nav:false
            }
        }
    })
  });

  $(document).ready(function () {
    $('#carruselpresentando').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:4,
                nav:false
            }
        }
    })
  });

  let menu = false
  $("#menu").click(()=>{
      if(!menu){
        $("#menu_mobile").removeClass('d-none').addClass("d-block")
        menu=true;
      }else{
        $("#menu_mobile").removeClass('d-block').addClass("d-none")
        menu=false;
      }
     
  })

