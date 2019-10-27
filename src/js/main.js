window.jQuery = require('jquery');
var $ = require('jquery');
var jQuery = require('jquery');

require("./flipclock.min.js");


//time counter
$(function(){
	var clock = $('.time__clock').FlipClock( {
		clockFace: 'DailyCounter',
		autoStart: false
	});

	var dt = "november 17 2019 23:59:59";
	var first = new Date(dt);
	var last = Date.now();
	var res = first - last;
	res /= 1000;
	clock.setTime(res);
	clock.setCountdown(true);
	clock.start();

	//style
	$('.flip-clock-divider.seconds .flip-clock-label').html('Секунд').css("right","-128px");
	$('.flip-clock-divider.minutes .flip-clock-label').html('Минут').css("right","-124px");;
	$('.flip-clock-divider.hours .flip-clock-label').html('Часов').css("right","-122px");;
	$('.flip-clock-divider.days .flip-clock-label').html('Дней').css("right","-115px");;
});


//remove placeholder

$(function(){
	if (window.innerWidth < 769) {
		$('input[type=email]').attr('placeholder','E-mail для ответа');
	} else {
		$('input[type=email]').attr('placeholder','E-mail, на который мы отправим ответ');
	}
})


$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})

//show-open text biografiya
$(function(){
	$('.biografiya__lesson').click(function(){
		var hideBlock = $('.biografiya__disc-hide');
    var blockdisplay = hideBlock.css('display');
    hideBlock.slideToggle();
    (blockdisplay == "block") ? $(this).html('Читать полностью') : $(this).html('Скрыть')
	})
})


	//send mail
	$( document ).ready(function() {
		$(".video__form form").submit(function(e){
				e.preventDefault();
				sendAjaxForm('.video__form form', 'mail.php');

				function sendAjaxForm(ajax_form, url) {
						$.ajax({
								url:     url, //url страницы (send.php)
								type:     "POST", //метод отправки
								dataType: "html",
								data: $(ajax_form).serialize(),  // Сеарилизуем объект
								beforeSend: function(data) { // событие до отправки
									$('.video__btn').attr('disabled', 'disabled');						
								},
								success: function(response) { //Данные отправлены успешно
										console.log(response);
										result = $.parseJSON(response);
										console.log(result);
										$(".vide__form form").trigger("reset");

										// $('.modal-head-name').html("Спасибо!");
										// $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
										// $(".modal-overlay1").fadeIn();
										// $(".modal1").fadeIn();
										// $(".modal1").css({"transform" : "translateY(0%)"});
										// $("body").css({"overflow":"hidden"});
										// $('.workim__btn').removeAttr('disabled');
								}
						});
				}
		});
	});

	$(".modal-overlay1, .close-modal1").on("click", function(){
		$submit.removeAttribute("disabled")
		$(".modal-overlay1").fadeOut();
		$(".modal1").fadeOut();
		$(".modal1").css({"transform" : "translateY(300%)"});
		$("body").css({"overflow":"visible"});
})
