/* 
 * Copyright (c) 2012 Leonardo Cardoso (http://leocardz.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 0.1.6
 *
 */
(function ($) {
    $.fn.rotate = function (options) {
        var settings = $.extend({
            'way': 'right',
            'time': 0,
            'speed': 1,
            'degrees': "",
            'event': "",
			'clock': 'no',
			'hour': 'no',
			'minute': 'no',
			'second': 'no',
        }, options);
		if(settings.clock == 'no'){	
			if (settings.event == "" || settings.event == "default") {
				var id = this;
				var blockEvent = false;
				var interval;
				if(settings.degrees === 0) settings.degrees = 1;
				var degrees = settings.degrees;
				var currentDegree = 0;
				if (settings.time < 0) {
					settings.time = 0;
				}
				if (settings.speed <= 0) {
					settings.speed = 1;
				}
				if (blockEvent == false) {
					interval = setInterval(function () {
						if (settings.degrees == "" || currentDegree < degrees - 1) {
							if (settings.way == "right") currentDegree += settings.speed;
							if (settings.way == "left") currentDegree -= settings.speed;
						} else {
							clearInterval(interval);
							if (settings.degrees != "") degrees += settings.degrees;
							blockEvent = false;
						}
						if (currentDegree % 360 == 0) {
							currentDegree = 0;
							degrees = (currentDegree + degrees) % 360;
						}
						$(id).css({
							'-webkit-transform': 'rotate(' + currentDegree + 'deg)',
							'-moz-transform': 'rotate(' + currentDegree + 'deg)',
							'-ms-transform': 'rotate(' + currentDegree + 'deg)',
							'-o-transform': 'rotate(' + currentDegree + 'deg)',
							'transform': 'rotate(' + currentDegree + 'deg)'
						});
					}, settings.time);
				}
				blockEvent = true;
			}
			if (settings.event == "click") {
				if (settings.time < 0) {
					settings.time = 0;
				}
				if (settings.speed <= 0) {
					settings.speed = 1;
				}
				var id = this;
				var blockEvent = false;
				var interval;
				if(settings.degrees === 0) settings.degrees = 1;
				var degrees = settings.degrees;
				var currentDegree = 0;
				$(id).click(function () {
					if (blockEvent == false) {
						interval = setInterval(function () {
							if (settings.degrees == "" || currentDegree < degrees - 1) {
								if (settings.way == "right") currentDegree += settings.speed;
								if (settings.way == "left") currentDegree -= settings.speed;
							} else {
								clearInterval(interval);
								if (settings.degrees != "") degrees += settings.degrees;
								blockEvent = false;
							}
							if (currentDegree % 360 == 0) {
								currentDegree = 0;
								degrees = (currentDegree + degrees) % 360;
							}
							$(id).css({
								'-webkit-transform': 'rotate(' + currentDegree + 'deg)',
								'-moz-transform': 'rotate(' + currentDegree + 'deg)',
								'-ms-transform': 'rotate(' + currentDegree + 'deg)',
								'-o-transform': 'rotate(' + currentDegree + 'deg)',
								'transform': 'rotate(' + currentDegree + 'deg)'
							});
						}, settings.time);
						blockEvent = true;
					} else {
						clearInterval(interval);
						blockEvent = false;
					}
				})
			}
			if (settings.event == "mouseover") {
				if (settings.time < 0) {
					settings.time = 0;
				}
				if (settings.speed <= 0) {
					settings.speed = 1;
				}
				var id = this;
				var blockEvent = false;
				var interval;
				if(settings.degrees === 0) settings.degrees = 1;
				var degrees = settings.degrees;
				var currentDegree = 0;
				$(id).mouseover(function () {
					if (blockEvent == false) {
						interval = setInterval(function () {
							if (settings.degrees == "" || currentDegree < degrees - 1) {
								if (settings.way == "right") currentDegree += settings.speed;
								if (settings.way == "left") currentDegree -= settings.speed;
							} else {
								clearInterval(interval);
								if (settings.degrees != "") degrees += settings.degrees;
								blockEvent = false;
							}
							if (currentDegree % 360 == 0) {
								currentDegree = 0;
								degrees = (currentDegree + degrees) % 360;
							}
							$(id).css({
								'-webkit-transform': 'rotate(' + currentDegree + 'deg)',
								'-moz-transform': 'rotate(' + currentDegree + 'deg)',
								'-ms-transform': 'rotate(' + currentDegree + 'deg)',
								'-o-transform': 'rotate(' + currentDegree + 'deg)',
								'transform': 'rotate(' + currentDegree + 'deg)'
							});
						}, settings.time);
					}
					blockEvent = true;

				});
				$(id).mouseout(function () {
					clearInterval(interval);
					blockEvent = false;
				})
			}
		}
		else{
			$.fn.clock = function(){
				var now = new Date();
				var hour = now.getHours();
				var minute = now.getMinutes();
				var second = now.getSeconds();
				$('#chromeHour').css({
					'-webkit-transform': 'rotate(' + (hour * 15) + 'deg)',
					'-moz-transform': 'rotate(' + (hour * 15) + 'deg)',
					'-ms-transform': 'rotate(' + (hour * 15) + 'deg)',
					'-o-transform': 'rotate(' + (hour * 15) + 'deg)',
					'transform': 'rotate(' + (hour * 15) + 'deg)'
				});
				$('#chromeMinutes').css({
					'-webkit-transform': 'rotate(' + (minute * 6) + 'deg)',
					'-moz-transform': 'rotate(' + (minute * 6) + 'deg)',
					'-ms-transform': 'rotate(' + (minute * 6) + 'deg)',
					'-o-transform': 'rotate(' + (minute * 6) + 'deg)',
					'transform': 'rotate(' + (minute * 6) + 'deg)'
				});
				$('#chromeSeconds').css({
					'-webkit-transform': 'rotate(' + (second * 6) + 'deg)',
					'-moz-transform': 'rotate(' + (second * 6) + 'deg)',
					'-ms-transform': 'rotate(' + (second * 6) + 'deg)',
					'-o-transform': 'rotate(' + (second * 6) + 'deg)',
					'transform': 'rotate(' + (second * 6) + 'deg)'
				});
				if(hour < 10) hour = "0"+hour;
				if(minute < 10) minute = "0"+minute;
				if(second < 10) second = "0"+second;
				$('#hour').html(hour);
				$('#minute').html(minute);
				$('#second').html(second);
			}
			$.fn.clock();
			setInterval('$.fn.clock()', 1000);
		}
    }
})(jQuery);