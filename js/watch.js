var $date = $('.date'),
	$hand = $('.hand'),
	$hr   = $hand.find('.hr'),
	$min  = $hand.find('.min'),
	$sec  = $hand.find('.sec');

$(window).load(function(){
	function writeTime(){
		setTimeout(function () {
			var _time = new Date(),
				_date = _time.getDate(),
				_hour = _time.getHours(),
				_min  = _time.getMinutes(),
				_sec  = _time.getSeconds();

			if (_date < 10) {
				_date = '0' + _date.toString();
			}

			if (_hour >= 12) {
				_hour = _hour - 12;
			}

			$date.text(_date);
			$hr.css({'transform' : 'rotate(' + ((_hour * 30) + (_min * 0.5)) + 'deg)'});
			$min.css({'transform' : 'rotate(' + ((_min * 6) + (_sec * 0.1)) + 'deg)'});
			$sec.css({'transform' : 'rotate(' + (_sec * 6) + 'deg)'});
			$(".sec span.pointer").css({'transform' : 'rotate(' + (_sec * 6) + 'deg)'});
			$(".hr span.pointer").css({'transform' : 'rotate(' + ((_hour * 30) + (_min * 0.5)) + 'deg)'});
			$(".min span.pointer").css({'transform' : 'rotate(' + ((_min * 6) + (_sec * 0.1)) + 'deg)'});
			writeTime();
		}, 1000);
	}
	writeTime();
});	