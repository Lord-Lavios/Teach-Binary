var winHeight = $(window).height();
var headHeight = $("#outerhead").height();
var yScroll = 0;
var check = 0;
var checkr = 0;
var width = $("#center-column").width();

$(window).scroll(function() {
	var yScroll = $(this).scrollTop();	
	console.log(yScroll);

    //Making parallax work, if the page is left in between and reloaded
    if(check === 0) {
    	check = 1;
    	yScroll = 0;
    }
    parallax();
	/*
	$("#main-content").css({
		'transform' : 'translate(0px, -'+ yScroll/20 + '%)'
	});
*/
function parallax () {
	if(yScroll > 110) {
		$("#content-inside").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 710) {
		$("#exampledec").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 940) {
		$("#examplebin").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 1240) {
		$("#hidetest").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 1720) {
		$("#testbinOneTable").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 1920) {
		$("#testbinTwoTable").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 2020) {
		$("#testbinThreeTable").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 2220) {
		$("#testbinFourTable").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 2320) {
		$("#testbinFiveTable").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 2950) {
		$("#newcolumn").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

	if(yScroll > 3260) {
		$("#bitsbyte").css({
			'-webkit-animation': 'fadein 3s forwards'
		});
	}

    	//ASCII head changes height from here

    	if(yScroll > 3785) {
    		$("#ascitable-div").css({
    			'-webkit-animation': 'fadein 3s forwards'
    		});
    	}

    	if(yScroll > 5010 && checkr === 0 || yScroll> 4280 && checkr === 1) {
    		$("#equation").css({
    			'-webkit-animation': 'fadein 3s forwards'
    		});
    	}

    	if(yScroll > 5470 && checkr === 0 || yScroll> 4760 && checkr === 1) {
    		$("#memoryCalc").css({
    			'-webkit-animation': 'fadein 3s forwards'
    		});
    	}

    	if(yScroll > 5710 && checkr === 0 || yScroll> 5000 && checkr === 1) {
    		$("#memequal").css({
    			'-webkit-animation': 'fadein 3s forwards'
    		});
    	}
    }
});

//Scrolls to the top when page loads
$(window).ready(function(){
	setTimeout (function () {
		scrollTo(0,0);
	}, 1900); 
});

$(document).ready(function() {

	asciitable();

	$("#hidetest").one('click', function() {
		$(this).css('cursor', 'default');
		$("#hidetest th:nth-child(2)").fadeOut('200', function() {
			$("#hidetest th:nth-child(2)").text('1').fadeIn(300);
		});
	});
	$("#testbinOneTable").one('click', function() {
		$(this).css('cursor', 'default');
		$("#testbinOneTable th:nth-child(2), #testbinOneTable th:nth-child(3)").fadeOut('200', function() {
			$(this).text('1').fadeIn(300);
		});
	});
	$("#testbinTwoTable").one('click', function() {
		$(this).css('cursor', 'default');
		$("#testbinTwoTable th:nth-child(1)").fadeOut('200', function() {
			$(this).text('1').fadeIn(300);
		});
	});
	$("#testbinThreeTable").one('click', function() {
		$(this).css('cursor', 'default');
		$("#testbinThreeTable th:nth-child(1), #testbinThreeTable th:nth-child(3)").fadeOut('200', function() {
			$(this).text('1').fadeIn(300);
		});
	});
	$("#testbinFourTable").one('click', function() {
		$(this).css('cursor', 'default');
		$("#testbinFourTable th:nth-child(1), #testbinFourTable th:nth-child(2) ").fadeOut('200', function() {
			$(this).text('1').fadeIn(300);
		});
	});
	$("#testbinFiveTable").one('click', function() {
		$(this).css('cursor', 'default');
		$("#testbinFiveTable th:nth-child(1), #testbinFiveTable th:nth-child(2), #testbinFiveTable th:nth-child(3)").fadeOut('200', function() {
			$(this).text('1').fadeIn(300);
		});
	});

	//For the first time

	setInterval(ratio, 100);

	function ratio () {
		var once = 0;
		if(once === 0) {
			var cHeight = Math.round((width/16)*9);
			$("iframe").attr('height', cHeight);
			once = 1;
		}
		if(width != $("#center-column").width()) {
			cHeight = Math.round((width/16)*9);
			$("iframe").attr('height', cHeight);
			width = $("#center-column").width();
		} else if(width === 680) {
			$("iframe").attr('height', '383');
		}
	}

 	function asciitable() {
		$("#ascii-head").click(function() {
			if(checkr === 0 ) {
				checkr = 1;
				$("#ascii-table").hide('300');
			} else {
				checkr = 0;
				$("#ascii-table").show('300');
			}
		});
	}

	$("#last-second-inside p:nth-child(3)").one('click', function() {
		$(this).css('cursor', 'default');
		var str = "Vg'f fvzcyr, lbh jvyy whfg nqq nabgure pbyhza nsgre sbhe'f cynpr naq gung pbyhza jvyy unir gur cynpr inyhr bs rvtug'f.";
		var strArr = str.split('');
		var decodedArr = [];
		var increaseNum = 0;
		descramble();

		function descramble() {
			var num = str[increaseNum++];
			var currentLetter = num.charCodeAt();
			if(currentLetter >= 65 && currentLetter <= 90 || currentLetter >= 97 && currentLetter <= 122) {
				if(currentLetter >= 78 && currentLetter <= 90 || currentLetter >= 110 && currentLetter >= 97 ) {
					decodedArr.push(String.fromCharCode(currentLetter - 13));
				} else {
					decodedArr.push(String.fromCharCode(currentLetter + 13));
				}
			} else {
				decodedArr.push(num);
			}
			var sliced = str.slice(increaseNum + 1, str.length - 1);
			$("#last-second-inside p:nth-child(3)").text(decodedArr.join('') + sliced);
			if(increaseNum < str.length) {
				setTimeout(descramble, 70);
			}
		}
	});

	$("#questions-first-inside p:nth-child(3)").one('click',function(){
		$(this).css('cursor', 'default');
		var str ="Gur uneq qevir unf 1000TO nf nqiregvfrq ohg pbzchgre pnyhyngrf vg va gur cbjre bs 2 . Fb, 1000TO pbairegrq vagb Olgrf vf 1r+12(1 gura 12 mrebf nsgre gung) naq ol qvivqvat vg ol gur ynetrfg cbjre bs 2 gung pna svg va 1000TO juvpu vf 1024 ^3 be 2^ 30 juvpu erfhyg va gur nafjre 931TO.";
		var strArr = str.split('');
		var decodedArr = [];
		var increaseNum = 0;
		descramble();

		function descramble() {
			var num = str[increaseNum++];
			var currentLetter = num.charCodeAt();
			if(currentLetter >= 65 && currentLetter <= 90 || currentLetter >= 97 && currentLetter <= 122) {
				if(currentLetter >= 78 && currentLetter <= 90 || currentLetter >= 110 && currentLetter >= 97 ) {
					decodedArr.push(String.fromCharCode(currentLetter - 13));
				} else {
					decodedArr.push(String.fromCharCode(currentLetter + 13));
				}
			} else {
				decodedArr.push(num);
			}
			var sliced = str.slice(increaseNum + 1, str.length - 1);
			$("#questions-first-inside p:nth-child(3)").text(decodedArr.join('') + sliced);
			if(increaseNum < str.length) {
				setTimeout(descramble, 50);
			}
		}
	});
});