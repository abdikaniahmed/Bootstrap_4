$(function(){
    // speed of carousel 
    $("#mycarousel").carousel({ interval: 20})

    // Login toggle button 
    $("#loginModalButton").click(function(){
    $("#loginModal").modal('show');
    $("#loginModalButton").trigger('focus')
    })

    // x button cencelled Toggle in header
    $("#modalX").click(function(){
        $("#loginModal").modal('hide');
    })
    //  cencel button in the form 
    $("#modalC").click(function(){
        $("#loginModal").modal('hide');
    })

    // Modal Reserve  js code
    $("#ReserveButton").click(function(){
        $("#ReserveT").modal('show');
    })
    $("#carouselButton").click(function(){
      if  ($("#carouselButton").children('span').hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause')
            $("#carouselButton").children('span').addClass('fa-play')
        }
       else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play')
            $("#carouselButton").children('span').addClass('fa-pause')
        }
    });
})
