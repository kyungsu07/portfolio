$(function(){

    $(document).ready(function(){
        let d_width = 0; 
        let d_height = 0; 

        function tmp() {
            let con_width = $(window).outerWidth() * $('.back_box').length; 

            $('.back_con').css({
                width: con_width,
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0
            });

            $('.back_box').css({
                width: con_width / $('.back_box').length,
                height: '100vh',
                float: 'left'
            });

            $('body').css({
                height: '100vh'
            });

            let w_width = $(window).width(); 
            let w_height = $(window).height() 

            d_width = con_width - w_width; 
            d_height = $('body').height() - w_height 
        }

        tmp();

        let array = [];
        for(let i=0; i<$('.back_box').length; i++) {
            array[i] = $('.back_box').eq(i).offset().left
        }

        let chk = true;
        $('.back_box').on('mousewheel DOMMouseScroll', function(){


            if(chk) {
                chk = false;
                setTimeout(function(){
                    chk = true;
                }, 500)

                let w_delta = event.wheelDelta / 120;
                
                if(w_delta < 0 && $(this).next().length > 0) {
                    let b = $(this).index()+1 
                    $('.gnb li').removeClass('on')
                    $('.gnb li').eq(b).addClass('on')

                    $('.back_con').animate({
                        left: -array[b]
                    }, 500)

                    if(b> 0){
                        $('.me').animate({width: '10%'}, 1000)
                    } else {
                        $('.me').animate({width: '20%'}, 1000)
                    }


                   

                }
                else if(w_delta > 0 && $(this).prev().length > 0) {
                    let b = $(this).index()-1 
                    $('.gnb li').removeClass('on')
                    $('.gnb li').eq(b).addClass('on')

                    $('.back_con').animate({
                        left: -array[b]
                    }, 500)

                    if(b > 0){
                        $('.me').animate({width: '10%'}, 1000)
                    } else {
                        $('.me').animate({width: '20%'}, 500)
                    }
                }
            }

           

        });

        $(window).resize(function(){
            for(let i=0; i<$('.back_box').length; i++) {
                array[i] = $('.back_box').eq(i).offset().left
            }


        })


        $('.gnb li').click(function(){
            $('.gnb li').removeClass('on')
            $(this).addClass('on')
            let a = $(this).index()
            $('.back_con').animate({
                left: -array[a]
            }, 500)
            
            let b = $(this).index()+1
            if(b > 0){
                $('.me').animate({width: '10%'}, 1000)
            } else {
                $('.me').animate({width: '20%'}, 1000)
            }
            
        })

        

    });


    const content = "의미있게 코드쓰는 개발자! \n 끊임 없이 나아가는 개발자!";
    const text = document.querySelector(".spring_inner");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)


})

