!function(n){function t(t,a,i){t.addClass(a+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass(a+" animated"),i()})}function a(n,i){var e=i.autoplay,o=i.repeat,s=i.interval,l=i.outClass,d=i.inClass,u=i.slogans,r=~~n.attr("data-claim-id"),c=r>=u.length,f=c?u[0]:u[r];n.attr("data-claim-id",c?1==o?1:r:r+1),c&&1!=o||t(n,l,function(){n.find("span").text(f),t(n,d,function(){e===!0&&setTimeout(function(){a(n,i)},s)})})}n.fn.sloganRoulette=function(t){return n(this).each(function(){var i=this;t=t||{};var e=n.extend({autoplay:!0,repeat:!0,startDelay:700,interval:1e3,outClass:"fadeOutDown",inClass:"fadeInDown",slogans:["one","two","three"]},t);n(i).css("display","inline-block"),e.startDelay>0?setTimeout(function(){a(n(i),e)},e.startDelay):a(n(i),e)}),this}}(void 0!=window.Zepto?Zepto:jQuery);
//# sourceMappingURL=slogan-roulette.min.js.map