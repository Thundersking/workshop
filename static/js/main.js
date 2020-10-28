
//slick slider
$('.carousel-reviews').slick({
	centerMode: true,
	centerPadding: '270px',
	slidesToShow: 1,
	variableWidth: true,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });


//button up
  var btn = $('#button');

  $(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });
  
  btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
  });
  
  

//timer
const deadline = '2020-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


//читать далее
$(function(){
	$(".reviews-content__subtitle").elimore({
	maxLength: 1600,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			maxLength: 600,
			moreText: "Читать полностью",
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			maxLength: 500,
			moreText: "Читать полностью",
		  }
		}
	  ]
	});
});


//pop-up
var Popup = {
    init: function() {
        $('.popup__button_close').on('click', function (e) {
            e.preventDefault();
            Popup.close();
        });
        $('.popup__button_open').on('click', Popup.open);
    },
    open: function(){

        $('.popup').removeClass('popup_hide');
        $('body').addClass('body_hidden');

        setTimeout(function(){
            $('.popup__body').addClass('popup__body_visible');
        }, 100);

    },
    close: function(){

        $('.popup__body').removeClass('popup__body_visible');

        setTimeout(function(){
            $('.popup').addClass('popup_hide');
            $('body').removeClass('body_hidden');
        }, 150);
    }
};

// call
Popup.init();