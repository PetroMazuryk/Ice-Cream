!function(){var e,t,i,n;$(document).ready((function(){$(".slider ").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,dots:!0,fade:!0,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:520,settings:{slidesToShow:1}}]})})),e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),i=document.querySelectorAll(".mob-list__link"),n=function(){var i="true"===e.getAttribute("aria-expanded")||"false";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")},e.addEventListener("click",(function(){n();for(var e=0;e<i.length;e++)i[e].onclick=function(e){e.preventDefault(),n()}}));var o=document.querySelectorAll("._anim-items");if(o.length>0){function s(){for(var e=0;e<o.length;e++){var t=o[e],i=t.offsetHeight,n=(s=t,c=void 0,r=void 0,a=void 0,c=s.getBoundingClientRect(),r=window.scrollX||document.documentElement.scrollLeft,a=window.scrollY||document.documentElement.scrollTop,{top:c.top+a,left:c.left+r}).top,l=window.innerHeight-i/4;i>window.innerHeight&&(l=window.innerHeight-window.innerHeight/4),window.scrollY>n-l&&window.scrollY<n+i?t.classList.add("_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}var s,c,r,a}window.addEventListener("scroll",s),setTimeout((function(){s()}),100)}var c,r,a=Array.prototype.slice.call(document.getElementById("slider-dots").children),d=Array.prototype.slice.call(document.getElementById("slider-reviews").children),u=0,v=0,m=Array.prototype.slice.call(document.getElementById("pictures").children),f=document.getElementById("left-arrow"),g=document.getElementById("right-arrow"),w=0,h=0;function p(){for(var e=document.getElementsByClassName("review__text-block"),t=0,i=0;i<e.length;i++)e[i].offsetHeight>t&&(t=e[i].offsetHeight);for(var n=0;n<e.length;n++)e[n].style.height=t+"px"}window.onload=function(){var e=function(t){for(var i=0;i<a.length;i++)d[i].classList.remove("review_active"),d[i].classList.remove("review_inactive"),a[i].classList.remove("dots__dot_active");t<0&&(t=u=d.length-1),t>d.length-1&&(t=u=0),v!=u&&d[v].classList.add("review_inactive"),d[t].classList.add("review_active"),a[t].classList.add("dots__dot_active"),v=u,clearTimeout(c),c=setTimeout((function(){p(),e(u+=1)}),5e3)};for(l=0;l<a.length;l++)a[l].addEventListener("click",(function(){p(),e(u=a.indexOf(this))}));var t=function(e){for(var i=0;i<m.length;i++)m[i].classList.remove("picture_active"),m[i].classList.remove("picture_inactive");e<0&&(e=w=m.length-1),e>m.length-1&&(e=w=0),h!=w&&m[h].classList.add("picture_inactive"),m[e].classList.add("picture_active"),h=w,clearTimeout(r),r=setTimeout((function(){t(w+=1)}),5e3)};f.addEventListener("click",(function(){t(w-=1)})),g.addEventListener("click",(function(){t(w+=1)})),t(w),e(u)}}();
//# sourceMappingURL=index.85ec52bc.js.map
