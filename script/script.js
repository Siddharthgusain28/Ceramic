"use strict";
    $(function(){
        $(".navBar").click(function(){
            $("nav").slideToggle()
        })

        if(screen.width<480){
            $("nav li a").click(function(){
                $("nav").slideUp()
            })
        }
        $(" nav li a").click(function(e){
            
        })
        $(".btn").click(function(e){
            e.preventDefault()
        })
        $(".accordion a").click(function(e){
            e.preventDefault()
            $(".accordion a").removeClass("active")
            $(".accordion li").removeClass("active")
            $(this).addClass("active")
            $(".accordion p").slideUp()
            $(this).next("p").slideDown()
        })
        $(".moreItem").click(function(){
            $(this).children().toggleClass("fa-arrow-up")
            $(".more").slideToggle()
        })
        $(".cartbtn").click(function(){
            $("body").append(`<div class="overlay"></div>`)
            $(".overlay").append(`<div class="cart"></div>`)
            $(".cart").append(`<button class="fa fa-close"></button>`)

            $(".cart button").click(function(){
                $(".cart").remove()
                $(".overlay").remove()
            })
        })
    })