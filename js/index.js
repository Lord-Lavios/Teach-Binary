var winHeight=$(window).height(),headHeight=$("#outerhead").height(),yScroll=0,check=0,checkr=0,width=$("#center-column").width();$(window).scroll(function(){function t(){e>110&&$("#content-inside").css({"-webkit-animation":"fadein 3s forwards"}),e>710&&$("#exampledec").css({"-webkit-animation":"fadein 3s forwards"}),e>940&&$("#examplebin").css({"-webkit-animation":"fadein 3s forwards"}),e>1240&&$("#hidetest").css({"-webkit-animation":"fadein 3s forwards"}),e>1720&&$("#testbinOneTable").css({"-webkit-animation":"fadein 3s forwards"}),e>1920&&$("#testbinTwoTable").css({"-webkit-animation":"fadein 3s forwards"}),e>2020&&$("#testbinThreeTable").css({"-webkit-animation":"fadein 3s forwards"}),e>2220&&$("#testbinFourTable").css({"-webkit-animation":"fadein 3s forwards"}),e>2320&&$("#testbinFiveTable").css({"-webkit-animation":"fadein 3s forwards"}),e>2950&&$("#newcolumn").css({"-webkit-animation":"fadein 3s forwards"}),e>3260&&$("#bitsbyte").css({"-webkit-animation":"fadein 3s forwards"}),e>3785&&$("#ascitable-div").css({"-webkit-animation":"fadein 3s forwards"}),(e>5010&&0===checkr||e>4280&&1===checkr)&&$("#equation").css({"-webkit-animation":"fadein 3s forwards"}),(e>5470&&0===checkr||e>4760&&1===checkr)&&$("#memoryCalc").css({"-webkit-animation":"fadein 3s forwards"}),(e>5710&&0===checkr||e>5e3&&1===checkr)&&$("#memequal").css({"-webkit-animation":"fadein 3s forwards"})}var e=$(this).scrollTop();console.log(e),0===check&&(check=1,e=0),t()}),$(window).ready(function(){setTimeout(function(){scrollTo(0,0)},1900)}),$(document).ready(function(){function t(){var t=0;if(0===t){var e=Math.round(width/16*9);$("iframe").attr("height",e),t=1}width!=$("#center-column").width()?(e=Math.round(width/16*9),$("iframe").attr("height",e),width=$("#center-column").width()):680===width&&$("iframe").attr("height","383")}function e(){$("#ascii-head").click(function(){0===checkr?(checkr=1,$("#ascii-table").hide("300")):(checkr=0,$("#ascii-table").show("300"))})}e(),$("#hidetest").one("click",function(){$(this).css("cursor","default"),$("#hidetest th:nth-child(2)").fadeOut("200",function(){$("#hidetest th:nth-child(2)").text("1").fadeIn(300)})}),$("#testbinOneTable").one("click",function(){$(this).css("cursor","default"),$("#testbinOneTable th:nth-child(2), #testbinOneTable th:nth-child(3)").fadeOut("200",function(){$(this).text("1").fadeIn(300)})}),$("#testbinTwoTable").one("click",function(){$(this).css("cursor","default"),$("#testbinTwoTable th:nth-child(1)").fadeOut("200",function(){$(this).text("1").fadeIn(300)})}),$("#testbinThreeTable").one("click",function(){$(this).css("cursor","default"),$("#testbinThreeTable th:nth-child(1), #testbinThreeTable th:nth-child(3)").fadeOut("200",function(){$(this).text("1").fadeIn(300)})}),$("#testbinFourTable").one("click",function(){$(this).css("cursor","default"),$("#testbinFourTable th:nth-child(1), #testbinFourTable th:nth-child(2) ").fadeOut("200",function(){$(this).text("1").fadeIn(300)})}),$("#testbinFiveTable").one("click",function(){$(this).css("cursor","default"),$("#testbinFiveTable th:nth-child(1), #testbinFiveTable th:nth-child(2), #testbinFiveTable th:nth-child(3)").fadeOut("200",function(){$(this).text("1").fadeIn(300)})}),setInterval(t,100),$("#last-second-inside p:nth-child(3)").one("click",function(){function t(){var s=e[n++],a=s.charCodeAt();a>=65&&90>=a||a>=97&&122>=a?a>=78&&90>=a||a>=110&&a>=97?i.push(String.fromCharCode(a-13)):i.push(String.fromCharCode(a+13)):i.push(s);var c=e.slice(n+1,e.length-1);$("#last-second-inside p:nth-child(3)").text(i.join("")+c),n<e.length&&setTimeout(t,70)}$(this).css("cursor","default");var e="Vg'f fvzcyr, lbh jvyy whfg nqq nabgure pbyhza nsgre sbhe'f cynpr naq gung pbyhza jvyy unir gur cynpr inyhr bs rvtug'f.",i=(e.split(""),[]),n=0;t()}),$("#questions-first-inside p:nth-child(3)").one("click",function(){function t(){var s=e[n++],a=s.charCodeAt();a>=65&&90>=a||a>=97&&122>=a?a>=78&&90>=a||a>=110&&a>=97?i.push(String.fromCharCode(a-13)):i.push(String.fromCharCode(a+13)):i.push(s);var c=e.slice(n+1,e.length-1);$("#questions-first-inside p:nth-child(3)").text(i.join("")+c),n<e.length&&setTimeout(t,50)}$(this).css("cursor","default");var e="Gur uneq qevir unf 1000TO nf nqiregvfrq ohg pbzchgre pnyhyngrf vg va gur cbjre bs 2 . Fb, 1000TO pbairegrq vagb Olgrf vf 1r+12(1 gura 12 mrebf nsgre gung) naq ol qvivqvat vg ol gur ynetrfg cbjre bs 2 gung pna svg va 1000TO juvpu vf 1024 ^3 be 2^ 30 juvpu erfhyg va gur nafjre 931TO.",i=(e.split(""),[]),n=0;t()})});