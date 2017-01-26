$(document).ready(function(){
	$("#trigger").click(function(){
		$("#trigger-img").toggle();
		$("#trigger-img").animate({
			width: 'toggle',
			height: 'toggle'
		});
	});
	   
});

function change() {
	document.getElementById('muscle-img').src= "./img/maxresdefault (1).jpg"
}