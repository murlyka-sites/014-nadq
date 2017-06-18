$(document).ready(function() {

	$(".menu__humburger").click(function() {
		$(".menu__body").toggleClass("menu__body_open");

		if($(".menu__body").hasClass("menu__body_open")) {
			// $("html, body").css("overflow", "hidden");
		} else {
			// $("html, body").css("overflow", "auto");
		}
	});

	$(window).on( 'resize load', function() {
		var height = $(window).height() - $(".menu__header").height();
		$(".menu__body").css("height", height)
	});

	$(window).scroll(function () {
			if($(document).scrollTop() > 0) {
				$(".menu").appendTo("#menu-fixed")
			} else {
				$(".menu").appendTo("#menu-static")
			}
	});

	$(".menu__body").mCustomScrollbar();

	$(".fancy").fancybox();

	$('.input--date-range').daterangepicker({
		// "autoUpdateInput": false,
		"opens": "left",
		"locale": {
				"format": "MM/DD/YYYY",
				"separator": " - ",
				"applyLabel": "Применить",
				"cancelLabel": "Отмена",
				"fromLabel": "From",
				"toLabel": "To",
				"customRangeLabel": "Custom",
				"weekLabel": "W",
				"daysOfWeek": [
						"Пн",
						"Вт",
						"Ср",
						"Чт",
						"Пт",
						"Сб",
						"Вс"
				],
				"monthNames": [
						"Январь",
						"Февраль",
						"Март",
						"Апрель",
						"Май",
						"Июнь",
						"Июль",
						"Август",
						"Сентябрь",
						"Октябрь",
						"Ноябрь",
						"Декабрь"
				],
				"firstDay": 1
		},
	});

});
