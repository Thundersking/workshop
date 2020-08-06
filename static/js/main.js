
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
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
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
var countDownDate = new Date('00:00:00').getTime();

var countDownFunction = setInterval(function () {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById('timer').innerHTML = 
		hours + 'ч ' + minutes + 'м ' + seconds + 'с ';
}, 1000);