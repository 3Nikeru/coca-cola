$( document ).ready(function() {

    //Снегопад
    $(document).snowfall({
        flakeCount : 20,
        maxSize : 10,
        minSize: 10,
        round: true,
        maxSpeed : 5
    });
    //Бургер меню
      $("#menu-bar").on( "click", function (){
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("mob_menu").classList.toggle("change");

        let menu = $('#menu-bar');
        let mob_menu = $('#mob_menu');
        if(menu.hasClass('menu-bar')){
            menu.removeClass('menu-bar', 1000, "easeInBack" );
            menu.addClass('open');
            setTimeout(function(){
                mob_menu.css({"position": "absolute", "display": "block"}).animate({right: '178px'}, "slow");
            }, 1000);
            
        } else {
            menu.removeClass('open', 1000, "easeInBack" );
            menu.addClass('menu-bar');
             mob_menu.css({"position": "static", "display": "none"}).animate({right: '-178px'}, "slow");    
        };

    });
    //Вращение снежинки
    $(function() {
        var $elie = $(".snowflake");
        rotate(0);
        function rotate(degree) {        
            $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
            $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
            timer = setTimeout(function() {
                rotate(++degree);
            },40);
        }
    }); 
    let controller = new ScrollMagic.Controller();
    $(function () {
		let scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
						.setPin("#pin")
						// .addIndicators({name: "1 (duration: 300)"})
						.addTo(controller);
	});

    //Всплывающее облако Санты
    $('.cloud').fadeIn(3000);

    //Постраничный сролл
    $(function() {
        $.scrollify({
          section : ".section",
          sectionName : "section-name"
        });
      });

    //Выбор подарка
    let active = 'choosen1';
    $('.present').on('click', function(e){
        
        e.preventDefault();
                let id = $(this).attr('href');
                $('.present').removeClass('activ');
                $(this).addClass('activ');
                if($(this).hasClass('activ')){

                }
                $('#'+active).addClass('none');
                $('#'+id).removeClass('none');
                active = id;

                $('.press').eq($(this).index()).toggle().css({"display": "flex"}).siblings('.press').hide()
    });
    //Изменения при мобильном разширении
    if (window.matchMedia('(max-width: 768px)').matches){
        if($('#menu-bar').hasClass('menu-bar')){
           
        }else{
           
        }
    
    $.scrollify.disable();
    $('.cloud').hide();
    
    }
    //Стилизация select
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                $('.new-select').css({"border-bottom-left-radius": "0",
                    "border-bottom-right-radius": "0"});
                selectList.slideDown(500);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration).css({"border-bottom-left-radius": "15px",
                    "border-bottom-right-radius": "15px"});;
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(500);
                setTimeout(function(){
                    $('.new-select').css({"border-bottom-left-radius": "15px",
                    "border-bottom-right-radius": "15px"})
                }, 500);
                
            }
        });
    });
    //////////////////////////////////////////////////////////////////////////////

});
