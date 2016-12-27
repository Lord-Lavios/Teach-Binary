"use strict";

var winHeight = $(window).height();
var headHeight = $("#outerhead").height();
var yScroll = 0;
var check = 0;
var checkr = 0;
var width = $("#center-column").width();

$(window).scroll(function () {
    yScroll = $(this).scrollTop();
    console.log(yScroll);
    parallax();
});

function parallax() {
    if ($(window).width() > 650) {
        if (yScroll > 120) {
            $("#content-inside").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 730) {
            $("#exampledec").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 960) {
            $("#examplebin").css({
                '-animation': 'fadein 3s forwards'
            });
        }

        if (yScroll > 1260) {
            $("#hidetest").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 1740) {
            $("#testbinOneTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 1940) {
            $("#testbinTwoTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2040) {
            $("#testbinThreeTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2240) {
            $("#testbinFourTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2340) {
            $("#testbinFiveTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2970) {
            $("#newcolumn").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 3280) {
            $("#bitsbyte").css({
                'animation': 'fadein 3s forwards',
            });
        }
        //ASCII head changes height from here
        if (yScroll > 3805) {
            $("#ascitable-div").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 5020 && checkr === 0 || yScroll > 4290 && checkr === 1) {
            $("#equation").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 5490 && checkr === 0 || yScroll > 4790 && checkr === 1) {
            $("#memoryCalc").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 5730 && checkr === 0 || yScroll > 5030 && checkr === 1) {
            $("#memequal").css({
                'animation': 'fadein 3s forwards',
            });
        }
    } else {
        if (yScroll > 170) {
            $("#content-inside").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 1010) {
            $("#exampledec").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 1320) {
            $("#examplebin").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 1560) {
            $("#hidetest").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2240) {
            $("#testbinOneTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2340) {
            $("#testbinTwoTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2510) {
            $("#testbinThreeTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2610) {
            $("#testbinFourTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 2810) {
            $("#testbinFiveTable").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 3210) {
            $("#newcolumn").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 3510) {
            $("#bitsbyte").css({
                'animation': 'fadein 3s forwards',
            });
        }
        //ASCII head changes height from here
        if (yScroll > 4170) {
            $("#ascitable-div").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 6110 && checkr === 0 || yScroll > 5210 && checkr === 1) {
            $("#equation").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 6810 && checkr === 0 || yScroll > 5910 && checkr === 1) {
            $("#memoryCalc").css({
                'animation': 'fadein 3s forwards',
            });
        }

        if (yScroll > 7310 && checkr === 0 || yScroll > 6370 && checkr === 1) {
            $("#memequal").css({
                'animation': 'fadein 3s forwards',
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
            }, 1500);
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
