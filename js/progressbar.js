function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('.loadline').animate({ width: progressBarWidth }, 1000).html(percent + "%&nbsp;");
}