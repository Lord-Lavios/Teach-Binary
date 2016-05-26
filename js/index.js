"use strict";

var winHeight = $(window).height();
var headHeight = $("#outerhead").height();
var yScroll = 0;
var check = 0;
var checkr = 0;
var width = $("#center-column").width();

console.log('firefox');

$(window).scroll(function () {
    yScroll = $(this).scrollTop();
    console.log(yScroll);
    parallax();
});

function parallax() {
    if ($(window).width() > 650) {
        if (yScroll > 120) {
            $("#content-inside").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 730) {
            $("#exampledec").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 960) {
            $("#examplebin").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1260) {
            $("#hidetest").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1740) {
            $("#testbinOneTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1940) {
            $("#testbinTwoTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2040) {
            $("#testbinThreeTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2240) {
            $("#testbinFourTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2340) {
            $("#testbinFiveTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2970) {
            $("#newcolumn").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 3280) {
            $("#bitsbyte").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }
        //ASCII head changes height from here
        if (yScroll > 3805) {
            $("#ascitable-div").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 5020 && checkr === 0 || yScroll > 4290 && checkr === 1) {
            $("#equation").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 5490 && checkr === 0 || yScroll > 4790 && checkr === 1) {
            $("#memoryCalc").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 5730 && checkr === 0 || yScroll > 5030 && checkr === 1) {
            $("#memequal").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }
    } else {
        if (yScroll > 170) {
            $("#content-inside").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1010) {
            $("#exampledec").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1320) {
            $("#examplebin").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1560) {
            $("#hidetest").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2240) {
            $("#testbinOneTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2340) {
            $("#testbinTwoTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2510) {
            $("#testbinThreeTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2610) {
            $("#testbinFourTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 2810) {
            $("#testbinFiveTable").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 3210) {
            $("#newcolumn").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 3510) {
            $("#bitsbyte").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }
        //ASCII head changes height from here
        if (yScroll > 4170) {
            $("#ascitable-div").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 6110 && checkr === 0 || yScroll > 5210 && checkr === 1) {
            $("#equation").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 6810 && checkr === 0 || yScroll > 5910 && checkr === 1) {
            $("#memoryCalc").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 7310 && checkr === 0 || yScroll > 6370 && checkr === 1) {
            $("#memequal").css({
                '-webkit-animation': 'fadein 3s forwards',
                '-moz-animation': 'fadein 3s forwards'
            });
        }
    }
}

$(document).ready(function () {

    width = $("#center-column").width();
    //for the first time
    generateRandomNumber();

    //Permanent storage of Highest Streak
    if (localStorage.getItem("High Score") !== null) {
        $("#highScore").text(localStorage.getItem("High Score"));
        var highestStreak = localStorage.getItem("High Score");
    } else {
        $("#highScore").text('0');
        highestStreak = 0;
    }

    var binaryAdd = [];
    var answerCheck = 0;
    var streak = 0;
    var motivation = ['Keep going! You can do it!', "Keep going! You'll get it next time!", "No worries! Get it next time!"];

    $('button').click(function () {
        answerCheck = 1;
        correctOrWrong();
    });

    function correctOrWrong() {
        var userAnswer = 0;

        binaryAdd.map(function (num) {
            var nums = parseInt(num);
            userAnswer = userAnswer + nums;
            return userAnswer;
        });

        var answer = parseInt($('#thenumber').text());

        if (userAnswer !== answer) {
            var random = motivation[Math.floor(Math.random() * motivation.length)];
            $("#webApp-inside").prepend('<p id="correctandwrong"> Incorrect. ' + random + '</p>').children('#correctandwrong').hide().fadeIn('600');
            setTimeout(function () {
                $("#correctandwrong").remove();
                console.log("fff");
            }, 1000);
            streak = 0;
            $('#streaknum').text('0');
        } else {
            $("#webApp-inside").prepend('<p id="correctandwrong"> Correct! Keep going!</p>').children('#correctandwrong').hide().fadeIn('600');
            setTimeout(function () {
                $("#correctandwrong").remove();
            }, 1000);
            streak += 1;
            $('#streaknum').text(streak);
        }

        if (streak > highestStreak) {
            localStorage.setItem('High Score', streak);
            $("#highScore").text(localStorage.getItem("High Score"));
        }

        nukeIt();
    }

    function nukeIt() {
        binaryAdd = [];
        $('#cards').children().css('background-color', '#000000');
        $('#cards').children().children().text('0');
        generateRandomNumber();
        answerCheck = 0;
    }

    function generateRandomNumber() {
        var newNum = Math.floor(1 + Math.random() * 255);
        $('#thenumber').text(newNum);
    }

    $('#cards').children().click(function () {
        if (answerCheck === 0) {
            var index = $(this).index() + 1;
            if ($(this).children().text() === '0') {
                $(this).css('background-color', '#72EA30');
                binaryAdd.push($("#values :nth-child(" + index + ')').children().text());
                $(this).children().text('1');
            } else {
                $(this).css('background-color', '#000000');
                $(this).children().text('0');
                for (i = 0, j = binaryAdd.length; i < j; i++) {
                    if (binaryAdd[i] === $("#values :nth-child(" + index + ')').children().text()) {
                        binaryAdd.splice(i, 1);
                    }
                }
            }
        }
    });

    asciitable();

    $("#hidetest").one('click', function () {
        $(this).css('cursor', 'default');
        $("#hidetest th:nth-child(2)").fadeOut('200', function () {
            $("#hidetest th:nth-child(2)").text('1').fadeIn(300);
        });
    });
    $("#testbinOneTable").one('click', function () {
        $(this).css('cursor', 'default');
        $("#testbinOneTable th:nth-child(2), #testbinOneTable th:nth-child(3)").fadeOut('200', function () {
            $(this).text('1').fadeIn(300);
        });
    });
    $("#testbinTwoTable").one('click', function () {
        $(this).css('cursor', 'default');
        $("#testbinTwoTable th:nth-child(1)").fadeOut('200', function () {
            $(this).text('1').fadeIn(300);
        });
    });
    $("#testbinThreeTable").one('click', function () {
        $(this).css('cursor', 'default');
        $("#testbinThreeTable th:nth-child(1), #testbinThreeTable th:nth-child(3)").fadeOut('200', function () {
            $(this).text('1').fadeIn(300);
        });
    });
    $("#testbinFourTable").one('click', function () {
        $(this).css('cursor', 'default');
        $("#testbinFourTable th:nth-child(1), #testbinFourTable th:nth-child(2) ").fadeOut('200', function () {
            $(this).text('1').fadeIn(300);
        });
    });
    $("#testbinFiveTable").one('click', function () {
        $(this).css('cursor', 'default');
        $("#testbinFiveTable th:nth-child(1), #testbinFiveTable th:nth-child(2), #testbinFiveTable th:nth-child(3)").fadeOut('200', function () {
            $(this).text('1').fadeIn(300);
        });
    });

    var once = 0;
    setInterval(ratio, 100);

    function ratio() {
        //For the first time
        if (once === 0) {
            var cHeight = Math.round(width / 16 * 9);
            $("iframe").attr('height', cHeight);
            once = 1;
        }
        if (width != $("#center-column").width()) {
            cHeight = Math.round(width / 16 * 9);
            $("iframe").attr('height', cHeight);
            console.log("cmon " + width);
            width = $("#center-column").width();
        } else if (width === 680) {
            //This is the max width, no need to change the iframe
            $("iframe").attr('height', '383');
        }
    }

    function asciitable() {
        $("#ascii-head").click(function () {
            if (checkr === 0) {
                checkr = 1;
                $("#ascii-table-one,#ascii-table-two").hide('fast');
            } else {
                checkr = 0;
                $("#ascii-table-one,#ascii-table-two").show('fast');
            }
        });
    }

    $("#last-second-inside p:nth-child(3)").one('click', function () {
        $(this).css('cursor', 'default');
        var str = "Vg'f fvzcyr, lbh jvyy whfg nqq nabgure pbyhza nsgre sbhe'f cynpr naq gung pbyhza jvyy unir gur cynpr inyhr bs rvtug'f.";
        var strArr = str.split('');
        var decodedArr = [];
        var increaseNum = 0;
        descramble();

        function descramble() {
            var num = str[increaseNum++];
            var currentLetter = num.charCodeAt();
            if (currentLetter >= 65 && currentLetter <= 90 || currentLetter >= 97 && currentLetter <= 122) {
                if (currentLetter >= 78 && currentLetter <= 90 || currentLetter >= 110 && currentLetter >= 97) {
                    decodedArr.push(String.fromCharCode(currentLetter - 13));
                } else {
                    decodedArr.push(String.fromCharCode(currentLetter + 13));
                }
            } else {
                decodedArr.push(num);
            }
            var sliced = str.slice(increaseNum + 1, str.length - 1);
            $("#last-second-inside p:nth-child(3)").text(decodedArr.join('') + sliced);
            if (increaseNum < str.length) {
                setTimeout(descramble, 70);
            }
        }
    });

    $("#questions-first-inside p:nth-child(3)").one('click', function () {
        $(this).css('cursor', 'default');
        var str = "Gur uneq qevir unf 1000TO nf nqiregvfrq ohg pbzchgre pnyhyngrf vg va gur cbjre bs 2 . Fb, 1000TO pbairegrq vagb Olgrf vf 1r+12(1 gura 12 mrebf nsgre gung) naq ol qvivqvat vg ol gur ynetrfg cbjre bs 2 gung pna svg va 1000TO juvpu vf 1024 ^3 be 2^ 30 juvpu erfhyg va gur nafjre 931TO.";
        var strArr = str.split('');
        var decodedArr = [];
        var increaseNum = 0;
        descramble();

        function descramble() {
            var num = str[increaseNum++];
            var currentLetter = num.charCodeAt();
            if (currentLetter >= 65 && currentLetter <= 90 || currentLetter >= 97 && currentLetter <= 122) {
                if (currentLetter >= 78 && currentLetter <= 90 || currentLetter >= 110 && currentLetter >= 97) {
                    decodedArr.push(String.fromCharCode(currentLetter - 13));
                } else {
                    decodedArr.push(String.fromCharCode(currentLetter + 13));
                }
            } else {
                decodedArr.push(num);
            }
            var sliced = str.slice(increaseNum + 1, str.length - 1);
            $("#questions-first-inside p:nth-child(3)").text(decodedArr.join('') + sliced);
            if (increaseNum < str.length) {
                setTimeout(descramble, 50);
            }
        }
    });
});
//# sourceMappingURL=data:application/json;base64,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aUIsRUFBakIsSUFBdUIsaUJBQWlCLEVBQXhDLElBQThDLGlCQUFpQixFQUFqQixJQUF1QixpQkFBaUIsR0FBekYsRUFBOEY7QUFDMUYsb0JBQUcsaUJBQWlCLEVBQWpCLElBQXVCLGlCQUFpQixFQUF4QyxJQUE4QyxpQkFBaUIsR0FBakIsSUFBd0IsaUJBQWlCLEVBQTFGLEVBQStGO0FBQzNGLCtCQUFXLElBQVgsQ0FBZ0IsT0FBTyxZQUFQLENBQW9CLGdCQUFnQixFQUFwQyxDQUFoQjtBQUNILGlCQUZELE1BRU87QUFDSCwrQkFBVyxJQUFYLENBQWdCLE9BQU8sWUFBUCxDQUFvQixnQkFBZ0IsRUFBcEMsQ0FBaEI7QUFDSDtBQUNKLGFBTkQsTUFNTztBQUNILDJCQUFXLElBQVgsQ0FBZ0IsR0FBaEI7QUFDSDtBQUNELGdCQUFJLFNBQVMsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUF4QixFQUEyQixJQUFJLE1BQUosR0FBYSxDQUF4QyxDQUFiO0FBQ0EsY0FBRSx3Q0FBRixFQUE0QyxJQUE1QyxDQUFpRCxXQUFXLElBQVgsQ0FBZ0IsRUFBaEIsSUFBc0IsTUFBdkU7QUFDQSxnQkFBRyxjQUFjLElBQUksTUFBckIsRUFBNkI7QUFDekIsMkJBQVcsVUFBWCxFQUF1QixFQUF2QjtBQUNIO0FBQ0o7QUFDSixLQTFCRDtBQTJCSCxDQTlORCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB3aW5IZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbnZhciBoZWFkSGVpZ2h0ID0gJChcIiNvdXRlcmhlYWRcIikuaGVpZ2h0KCk7XHJcbnZhciB5U2Nyb2xsID0gMDtcclxudmFyIGNoZWNrID0gMDtcclxudmFyIGNoZWNrciA9IDA7XHJcbnZhciB3aWR0aCA9ICQoXCIjY2VudGVyLWNvbHVtblwiKS53aWR0aCgpO1xyXG5cclxuY29uc29sZS5sb2coJ2ZpcmVmb3gnKTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICB5U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGNvbnNvbGUubG9nKHlTY3JvbGwpOyAgIFxyXG4gICAgcGFyYWxsYXgoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBwYXJhbGxheCAoKSB7XHJcbiAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDY1MCkge1xyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAxMjApIHtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50LWluc2lkZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiA3MzApIHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlZGVjXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDk2MCkge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGViaW5cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDEyNjApIHtcclxuICAgICAgICAgICAgJChcIiNoaWRldGVzdFwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMTc0MCkge1xyXG4gICAgICAgICAgICAkKFwiI3Rlc3RiaW5PbmVUYWJsZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMTk0MCkge1xyXG4gICAgICAgICAgICAkKFwiI3Rlc3RiaW5Ud29UYWJsZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMjA0MCkge1xyXG4gICAgICAgICAgICAkKFwiI3Rlc3RiaW5UaHJlZVRhYmxlXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAyMjQwKSB7XHJcbiAgICAgICAgICAgICQoXCIjdGVzdGJpbkZvdXJUYWJsZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMjM0MCkge1xyXG4gICAgICAgICAgICAkKFwiI3Rlc3RiaW5GaXZlVGFibGVcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDI5NzApIHtcclxuICAgICAgICAgICAgJChcIiNuZXdjb2x1bW5cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDMyODApIHtcclxuICAgICAgICAgICAgJChcIiNiaXRzYnl0ZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQVNDSUkgaGVhZCBjaGFuZ2VzIGhlaWdodCBmcm9tIGhlcmVcclxuICAgICAgICBpZih5U2Nyb2xsID4gMzgwNSkge1xyXG4gICAgICAgICAgICAkKFwiI2FzY2l0YWJsZS1kaXZcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDUwMjAgJiYgY2hlY2tyID09PSAwIHx8IHlTY3JvbGw+IDQyOTAgJiYgY2hlY2tyID09PSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIjZXF1YXRpb25cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDU0OTAgJiYgY2hlY2tyID09PSAwIHx8IHlTY3JvbGw+IDQ3OTAgJiYgY2hlY2tyID09PSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIjbWVtb3J5Q2FsY1wiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gNTczMCAmJiBjaGVja3IgPT09IDAgfHwgeVNjcm9sbD4gNTAzMCAmJiBjaGVja3IgPT09IDEpIHtcclxuICAgICAgICAgICAgJChcIiNtZW1lcXVhbFwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZih5U2Nyb2xsID4gMTcwKSB7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudC1pbnNpZGVcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDEwMTApIHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlZGVjXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAxMzIwKSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZWJpblwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMTU2MCkge1xyXG4gICAgICAgICAgICAkKFwiI2hpZGV0ZXN0XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAyMjQwKSB7XHJcbiAgICAgICAgICAgICQoXCIjdGVzdGJpbk9uZVRhYmxlXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAyMzQwKSB7XHJcbiAgICAgICAgICAgICQoXCIjdGVzdGJpblR3b1RhYmxlXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAyNTEwKSB7XHJcbiAgICAgICAgICAgICQoXCIjdGVzdGJpblRocmVlVGFibGVcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDI2MTApIHtcclxuICAgICAgICAgICAgJChcIiN0ZXN0YmluRm91clRhYmxlXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHlTY3JvbGwgPiAyODEwKSB7XHJcbiAgICAgICAgICAgICQoXCIjdGVzdGJpbkZpdmVUYWJsZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMzIxMCkge1xyXG4gICAgICAgICAgICAkKFwiI25ld2NvbHVtblwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gMzUxMCkge1xyXG4gICAgICAgICAgICAkKFwiI2JpdHNieXRlXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgICAgICctbW96LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vQVNDSUkgaGVhZCBjaGFuZ2VzIGhlaWdodCBmcm9tIGhlcmVcclxuICAgICAgICBpZih5U2Nyb2xsID4gNDE3MCkge1xyXG4gICAgICAgICAgICAkKFwiI2FzY2l0YWJsZS1kaXZcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDYxMTAgJiYgY2hlY2tyID09PSAwIHx8IHlTY3JvbGw+IDUyMTAgJiYgY2hlY2tyID09PSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIjZXF1YXRpb25cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LWFuaW1hdGlvbic6ICdmYWRlaW4gM3MgZm9yd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeVNjcm9sbCA+IDY4MTAgJiYgY2hlY2tyID09PSAwIHx8IHlTY3JvbGw+IDU5MTAgJiYgY2hlY2tyID09PSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIjbWVtb3J5Q2FsY1wiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5U2Nyb2xsID4gNzMxMCAmJiBjaGVja3IgPT09IDAgfHwgeVNjcm9sbD4gNjM3MCAmJiBjaGVja3IgPT09IDEpIHtcclxuICAgICAgICAgICAgJChcIiNtZW1lcXVhbFwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uJzogJ2ZhZGVpbiAzcyBmb3J3YXJkcycsXHJcbiAgICAgICAgICAgICAgICAnLW1vei1hbmltYXRpb24nOiAnZmFkZWluIDNzIGZvcndhcmRzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICB3aWR0aCA9ICQoXCIjY2VudGVyLWNvbHVtblwiKS53aWR0aCgpO1xyXG4gICAgLy9mb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XHJcblxyXG4gICAgLy9QZXJtYW5lbnQgc3RvcmFnZSBvZiBIaWdoZXN0IFN0cmVha1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJIaWdoIFNjb3JlXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgJChcIiNoaWdoU2NvcmVcIikudGV4dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2ggU2NvcmVcIikpO1xyXG4gICAgICAgIHZhciBoaWdoZXN0U3RyZWFrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJIaWdoIFNjb3JlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2hpZ2hTY29yZVwiKS50ZXh0KCcwJyk7XHJcbiAgICAgICAgaGlnaGVzdFN0cmVhayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJpbmFyeUFkZCA9IFtdO1xyXG4gICAgdmFyIGFuc3dlckNoZWNrID0gMDtcclxuICAgIHZhciBzdHJlYWsgPSAwO1xyXG4gICAgdmFyIG1vdGl2YXRpb24gPSBbJ0tlZXAgZ29pbmchIFlvdSBjYW4gZG8gaXQhJywgXCJLZWVwIGdvaW5nISBZb3UnbGwgZ2V0IGl0IG5leHQgdGltZSFcIiwgXCJObyB3b3JyaWVzISBHZXQgaXQgbmV4dCB0aW1lIVwiXVxyXG5cclxuICAgICQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFuc3dlckNoZWNrID0gMTtcclxuICAgICAgICBjb3JyZWN0T3JXcm9uZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY29ycmVjdE9yV3JvbmcoKSB7XHJcbiAgICAgICAgdmFyIHVzZXJBbnN3ZXIgPSAwO1xyXG5cclxuICAgICAgICBiaW5hcnlBZGQubWFwKGZ1bmN0aW9uKG51bSkge1xyXG4gICAgICAgICAgICB2YXIgbnVtcyA9IHBhcnNlSW50KG51bSk7XHJcbiAgICAgICAgICAgIHVzZXJBbnN3ZXIgPSB1c2VyQW5zd2VyICsgbnVtcztcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXJBbnN3ZXJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgYW5zd2VyID0gcGFyc2VJbnQoJCgnI3RoZW51bWJlcicpLnRleHQoKSk7XHJcblxyXG4gICAgICAgIGlmKHVzZXJBbnN3ZXIgIT09IGFuc3dlcikge1xyXG4gICAgICAgICAgICB2YXIgcmFuZG9tID0gbW90aXZhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3RpdmF0aW9uLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAkKFwiI3dlYkFwcC1pbnNpZGVcIikucHJlcGVuZCgnPHAgaWQ9XCJjb3JyZWN0YW5kd3JvbmdcIj4gSW5jb3JyZWN0LiAnICsgcmFuZG9tICsgJzwvcD4nKS5jaGlsZHJlbignI2NvcnJlY3RhbmR3cm9uZycpLmhpZGUoKS5mYWRlSW4oJzYwMCcpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb3JyZWN0YW5kd3JvbmdcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZmZlwiKTtcclxuICAgICAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICAgICAgc3RyZWFrID0gMDtcclxuICAgICAgICAgICAgJCgnI3N0cmVha251bScpLnRleHQoJzAnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3dlYkFwcC1pbnNpZGVcIikucHJlcGVuZCgnPHAgaWQ9XCJjb3JyZWN0YW5kd3JvbmdcIj4gQ29ycmVjdCEgS2VlcCBnb2luZyE8L3A+JykuY2hpbGRyZW4oJyNjb3JyZWN0YW5kd3JvbmcnKS5oaWRlKCkuZmFkZUluKCc2MDAnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29ycmVjdGFuZHdyb25nXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgICAgICBzdHJlYWsrPSAxO1xyXG4gICAgICAgICAgICAkKCcjc3RyZWFrbnVtJykudGV4dChzdHJlYWspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc3RyZWFrID4gaGlnaGVzdFN0cmVhaykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlnaCBTY29yZScsIHN0cmVhayk7XHJcbiAgICAgICAgICAgICQoXCIjaGlnaFNjb3JlXCIpLnRleHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJIaWdoIFNjb3JlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG51a2VJdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG51a2VJdCgpIHtcclxuICAgICAgICBiaW5hcnlBZGQgPSBbXTtcclxuICAgICAgICAkKCcjY2FyZHMnKS5jaGlsZHJlbigpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjMDAwMDAwJyk7XHJcbiAgICAgICAgJCgnI2NhcmRzJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpLnRleHQoJzAnKTtcclxuICAgICAgICBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xyXG4gICAgICAgIGFuc3dlckNoZWNrID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcigpIHtcclxuICAgICAgICB2YXIgbmV3TnVtID0gTWF0aC5mbG9vcigxICsgKE1hdGgucmFuZG9tKCkgKiAyNTUpKTtcclxuICAgICAgICAkKCcjdGhlbnVtYmVyJykudGV4dChuZXdOdW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCcjY2FyZHMnKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKGFuc3dlckNoZWNrID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSArIDE7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuY2hpbGRyZW4oKS50ZXh0KCkgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnIzcyRUEzMCcpO1xyXG4gICAgICAgICAgICAgICAgYmluYXJ5QWRkLnB1c2goJChcIiN2YWx1ZXMgOm50aC1jaGlsZChcIiArIGluZGV4ICsgJyknKS5jaGlsZHJlbigpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkudGV4dCgnMScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnIzAwMDAwMCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLnRleHQoJzAnKTtcclxuICAgICAgICAgICAgICAgIGZvcihpID0gMCxqID0gYmluYXJ5QWRkLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJpbmFyeUFkZFtpXSA9PT0gJChcIiN2YWx1ZXMgOm50aC1jaGlsZChcIiArIGluZGV4ICsgJyknKS5jaGlsZHJlbigpLnRleHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlBZGQuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIGFzY2lpdGFibGUoKTtcclxuXHJcbiAgICAkKFwiI2hpZGV0ZXN0XCIpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAkKFwiI2hpZGV0ZXN0IHRoOm50aC1jaGlsZCgyKVwiKS5mYWRlT3V0KCcyMDAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIiNoaWRldGVzdCB0aDpudGgtY2hpbGQoMilcIikudGV4dCgnMScpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3Rlc3RiaW5PbmVUYWJsZVwiKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgJChcIiN0ZXN0YmluT25lVGFibGUgdGg6bnRoLWNoaWxkKDIpLCAjdGVzdGJpbk9uZVRhYmxlIHRoOm50aC1jaGlsZCgzKVwiKS5mYWRlT3V0KCcyMDAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCcxJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjdGVzdGJpblR3b1RhYmxlXCIpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAkKFwiI3Rlc3RiaW5Ud29UYWJsZSB0aDpudGgtY2hpbGQoMSlcIikuZmFkZU91dCgnMjAwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dCgnMScpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI3Rlc3RiaW5UaHJlZVRhYmxlXCIpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAkKFwiI3Rlc3RiaW5UaHJlZVRhYmxlIHRoOm50aC1jaGlsZCgxKSwgI3Rlc3RiaW5UaHJlZVRhYmxlIHRoOm50aC1jaGlsZCgzKVwiKS5mYWRlT3V0KCcyMDAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCcxJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjdGVzdGJpbkZvdXJUYWJsZVwiKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgJChcIiN0ZXN0YmluRm91clRhYmxlIHRoOm50aC1jaGlsZCgxKSwgI3Rlc3RiaW5Gb3VyVGFibGUgdGg6bnRoLWNoaWxkKDIpIFwiKS5mYWRlT3V0KCcyMDAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCcxJykuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjdGVzdGJpbkZpdmVUYWJsZVwiKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgJChcIiN0ZXN0YmluRml2ZVRhYmxlIHRoOm50aC1jaGlsZCgxKSwgI3Rlc3RiaW5GaXZlVGFibGUgdGg6bnRoLWNoaWxkKDIpLCAjdGVzdGJpbkZpdmVUYWJsZSB0aDpudGgtY2hpbGQoMylcIikuZmFkZU91dCgnMjAwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dCgnMScpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHZhciBvbmNlID0gMDtcclxuICAgIHNldEludGVydmFsKHJhdGlvLCAxMDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJhdGlvICgpIHtcclxuICAgICAgICAvL0ZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIGlmKG9uY2UgPT09IDApIHtcclxuICAgICAgICAgICAgdmFyIGNIZWlnaHQgPSBNYXRoLnJvdW5kKCh3aWR0aC8xNikqOSk7XHJcbiAgICAgICAgICAgICQoXCJpZnJhbWVcIikuYXR0cignaGVpZ2h0JywgY0hlaWdodCk7XHJcbiAgICAgICAgICAgIG9uY2UgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aWR0aCAhPSAkKFwiI2NlbnRlci1jb2x1bW5cIikud2lkdGgoKSkge1xyXG4gICAgICAgICAgICBjSGVpZ2h0ID0gTWF0aC5yb3VuZCgod2lkdGgvMTYpKjkpO1xyXG4gICAgICAgICAgICAkKFwiaWZyYW1lXCIpLmF0dHIoJ2hlaWdodCcsIGNIZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNtb24gXCIgKyB3aWR0aCk7XHJcbiAgICAgICAgICAgIHdpZHRoID0gJChcIiNjZW50ZXItY29sdW1uXCIpLndpZHRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHdpZHRoID09PSA2ODApIHtcclxuICAgICAgICAgICAgLy9UaGlzIGlzIHRoZSBtYXggd2lkdGgsIG5vIG5lZWQgdG8gY2hhbmdlIHRoZSBpZnJhbWVcclxuICAgICAgICAgICAgJChcImlmcmFtZVwiKS5hdHRyKCdoZWlnaHQnLCAnMzgzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzY2lpdGFibGUoKSB7XHJcbiAgICAgICAgJChcIiNhc2NpaS1oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihjaGVja3IgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja3IgPSAxO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhc2NpaS10YWJsZS1vbmUsI2FzY2lpLXRhYmxlLXR3b1wiKS5oaWRlKCdmYXN0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja3IgPSAwO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhc2NpaS10YWJsZS1vbmUsI2FzY2lpLXRhYmxlLXR3b1wiKS5zaG93KCdmYXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2xhc3Qtc2Vjb25kLWluc2lkZSBwOm50aC1jaGlsZCgzKVwiKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgdmFyIHN0ciA9IFwiVmcnZiBmdnpjeXIsIGxiaCBqdnl5IHdoZmcgbnFxIG5hYmd1cmUgcGJ5aHphIG5zZ3JlIHNiaGUnZiBjeW5wciBuYXEgZ3VuZyBwYnloemEganZ5eSB1bmlyIGd1ciBjeW5wciBpbnlociBicyBydnR1ZydmLlwiO1xyXG4gICAgICAgIHZhciBzdHJBcnIgPSBzdHIuc3BsaXQoJycpO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQXJyID0gW107XHJcbiAgICAgICAgdmFyIGluY3JlYXNlTnVtID0gMDtcclxuICAgICAgICBkZXNjcmFtYmxlKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc2NyYW1ibGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSBzdHJbaW5jcmVhc2VOdW0rK107XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGV0dGVyID0gbnVtLmNoYXJDb2RlQXQoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudExldHRlciA+PSA2NSAmJiBjdXJyZW50TGV0dGVyIDw9IDkwIHx8IGN1cnJlbnRMZXR0ZXIgPj0gOTcgJiYgY3VycmVudExldHRlciA8PSAxMjIpIHtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMZXR0ZXIgPj0gNzggJiYgY3VycmVudExldHRlciA8PSA5MCB8fCBjdXJyZW50TGV0dGVyID49IDExMCAmJiBjdXJyZW50TGV0dGVyID49IDk3ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRBcnIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlbnRMZXR0ZXIgLSAxMykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQXJyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjdXJyZW50TGV0dGVyICsgMTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlY29kZWRBcnIucHVzaChudW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzbGljZWQgPSBzdHIuc2xpY2UoaW5jcmVhc2VOdW0gKyAxLCBzdHIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICQoXCIjbGFzdC1zZWNvbmQtaW5zaWRlIHA6bnRoLWNoaWxkKDMpXCIpLnRleHQoZGVjb2RlZEFyci5qb2luKCcnKSArIHNsaWNlZCk7XHJcbiAgICAgICAgICAgIGlmKGluY3JlYXNlTnVtIDwgc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZXNjcmFtYmxlLCA3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3F1ZXN0aW9ucy1maXJzdC1pbnNpZGUgcDpudGgtY2hpbGQoMylcIikub25lKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICB2YXIgc3RyID1cIkd1ciB1bmVxIHFldmlyIHVuZiAxMDAwVE8gbmYgbnFpcmVndmZycSBvaGcgcGJ6Y2hncmUgcG55aHluZ3JmIHZnIHZhIGd1ciBjYmpyZSBicyAyIC4gRmIsIDEwMDBUTyBwYmFpcmVncnEgdmFnYiBPbGdyZiB2ZiAxcisxMigxIGd1cmEgMTIgbXJlYmYgbnNncmUgZ3VuZykgbmFxIG9sIHF2aXZxdmF0IHZnIG9sIGd1ciB5bmV0cmZnIGNianJlIGJzIDIgZ3VuZyBwbmEgc3ZnIHZhIDEwMDBUTyBqdXZwdSB2ZiAxMDI0IF4zIGJlIDJeIDMwIGp1dnB1IGVyZmh5ZyB2YSBndXIgbmFmanJlIDkzMVRPLlwiO1xyXG4gICAgICAgIHZhciBzdHJBcnIgPSBzdHIuc3BsaXQoJycpO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQXJyID0gW107XHJcbiAgICAgICAgdmFyIGluY3JlYXNlTnVtID0gMDtcclxuICAgICAgICBkZXNjcmFtYmxlKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc2NyYW1ibGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSBzdHJbaW5jcmVhc2VOdW0rK107XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGV0dGVyID0gbnVtLmNoYXJDb2RlQXQoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudExldHRlciA+PSA2NSAmJiBjdXJyZW50TGV0dGVyIDw9IDkwIHx8IGN1cnJlbnRMZXR0ZXIgPj0gOTcgJiYgY3VycmVudExldHRlciA8PSAxMjIpIHtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMZXR0ZXIgPj0gNzggJiYgY3VycmVudExldHRlciA8PSA5MCB8fCBjdXJyZW50TGV0dGVyID49IDExMCAmJiBjdXJyZW50TGV0dGVyID49IDk3ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRBcnIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlbnRMZXR0ZXIgLSAxMykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQXJyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjdXJyZW50TGV0dGVyICsgMTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlY29kZWRBcnIucHVzaChudW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzbGljZWQgPSBzdHIuc2xpY2UoaW5jcmVhc2VOdW0gKyAxLCBzdHIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICQoXCIjcXVlc3Rpb25zLWZpcnN0LWluc2lkZSBwOm50aC1jaGlsZCgzKVwiKS50ZXh0KGRlY29kZWRBcnIuam9pbignJykgKyBzbGljZWQpO1xyXG4gICAgICAgICAgICBpZihpbmNyZWFzZU51bSA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVzY3JhbWJsZSwgNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
