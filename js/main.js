


function togglePlay($selector){
	console.log( $selector )

	var audio = document.getElementById("myAudio");
	var isPlay = ( $selector.attr("class").indexOf("on") >- 1 );
	console.log( isPlay )

	if(isPlay){
		$selector.removeClass("on");
		console.log( $selector.removeClass("on") )
		audio.pause();
	}
	if ( !isPlay ){
		$selector.addClass("on");
		console.log( $selector.addClass("on") )
		audio.play();
	}
};
togglePlay($selector);
