//===============================================//
// TYPED JS 
// ==============================================//
$(function(){
    $(".write").typed({
        strings: [
            "WEB DEVELOPER",
            "PROGRAMMER",
            "GAMER"
        ],
        
        typeSpeed: 400,
        //backDelay: 200,
        loop: true
    });
});

//===============================================//
// PROGRESS BAR
// ==============================================//
// Display the progress bar calling progressbar.js
$('.progressbar1').progressBar({
    shadow : true,
    percentage : false,
    animation : true,
});
$('.progressbar2').progressBar({
shadow : true,
percentage : false,
animation : true,
barColor : "#527AF9",
});
$('.progressbarPhp').progressBar({
shadow : true,
percentage : false,
animation : true,
animateTarget : true,
barColor : "#52ADF9",
});
$('.progressbarGit').progressBar({
shadow : true,
percentage : false,
animation : true,
barColor : "#52ADF9",
});
$('.progressbar3').progressBar({
shadow : true,
percentage : false,
animation : true,
animateTarget : true,
barColor : "#C3B238",
});

//Menu
$(".spinDown").click(function() {
var target = $(this).data("target");
var scrollFix = -80;
target = "#" + target;
$("html,body").animate({
    scrollTop : $(target).offset().top + scrollFix
}, 1000);
return false;
});








var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



//===============================================//
// Initialize and Configure Scroll Reveal Animation
// ==============================================//

window.sr = ScrollReveal();
sr.reveal('#', {
    duration:600,
    scale:0.3,
    distance: '0px'
} ,200);
sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
});
sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
}, 300);