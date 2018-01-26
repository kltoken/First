

$(function(){
	$('#div').mousedown(function(ev){
		var _this = $(this);
		var disX = ev.pageX - _this.offset().left;
		var disY = ev.pageY - _this.offset().top;

		var leftLimit = $(window).width() - _this.width();
		var topLimit = $(window).height() - _this.height();

		$(document).mousemove(function(ev){
			var leftVal = ev.pageX-disX<0 ? 0 : 
				( ev.pageX-disX > leftLimit ) ? leftLimit : ev.pageX-disX;

			var topVal = ev.pageY-disY<0 ? 0 :
				( ev.pageY-disY > topLimit ) ? topLimit : ev.pageY-disY;
			// console.dir(window)
			_this.offset({left:leftVal,top:topVal});

			$(document).mouseup(function(ev){
				$(document).off('mousemove');
				return false;
			})
		})
	})
})