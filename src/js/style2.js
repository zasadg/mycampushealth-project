// Video Modal
$(document).ready(function() {
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
      console.log($videoSrc);
    });
    console.log($videoSrc);
  
    $('#vModal-1').on('shown.bs.modal', function (e) {
    $("#video-1").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
    })
  
    $('#vModal-1').on('hide.bs.modal', function (e) {
        $("#video-1").attr('src',$videoSrc); 
    }) 
    
    $('#vModal-2').on('shown.bs.modal', function (e) {
    $("#video-2").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
    })
  
    $('#vModal-2').on('hide.bs.modal', function (e) {
        $("#video-2").attr('src',$videoSrc); 
    }) 
    
    $('#vModal-3').on('shown.bs.modal', function (e) {
    $("#video-3").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
    })
  
    $('#vModal-3').on('hide.bs.modal', function (e) {
        $("#video-3").attr('src',$videoSrc); 
    }) 
  
    $('#vModal-4').on('shown.bs.modal', function (e) {
        $("#video-4").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
        })
      
        $('#vModal-4').on('hide.bs.modal', function (e) {
            $("#video-4").attr('src',$videoSrc); 
        }) 
    
    $('#vModal-4').on('shown.bs.modal', function (e) {
        $("#video-5").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
        })
      
        $('#vModal-5').on('hide.bs.modal', function (e) {
            $("#video-5").attr('src',$videoSrc); 
        }) 
  
    $('#vModal-6').on('shown.bs.modal', function (e) {
        $("#video-6").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
        })
      
        $('#vModal-6').on('hide.bs.modal', function (e) {
            $("#video-6").attr('src',$videoSrc); 
        }) 
  });
  
    