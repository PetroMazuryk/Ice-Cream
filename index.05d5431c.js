$(document).ready((function(){$(".slider ").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,dots:!0,fade:!0,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:520,settings:{slidesToShow:1}}]})})),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),i=document.querySelectorAll(".mob-list__link"),o=()=>{const i="true"===e.getAttribute("aria-expanded")||"false";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};e.addEventListener("click",(()=>{o();for(var e=0;e<i.length;e++)i[e].onclick=function(e){e.preventDefault(),o()}}))})();const e=document.querySelectorAll("._anim-items");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const o=e[t],n=o.offsetHeight,l=i(o).top,s=4;let c=window.innerHeight-n/s;n>window.innerHeight&&(c=window.innerHeight-window.innerHeight/s),window.scrollY>l-c&&window.scrollY<l+n?o.classList.add("_active"):o.classList.contains("_anim-no-hide")||o.classList.remove("_active")}}function i(e){const t=e.getBoundingClientRect(),i=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+i}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),100)}let o,n,s=Array.prototype.slice.call(document.getElementById("slider-dots").children),c=Array.prototype.slice.call(document.getElementById("slider-reviews").children),r=0,d=0,a=Array.prototype.slice.call(document.getElementById("pictures").children),u=document.getElementById("left-arrow"),m=document.getElementById("right-arrow"),g=0,v=0;function w(){let e=document.getElementsByClassName("review__text-block"),t=0;for(let i=0;i<e.length;i++)e[i].offsetHeight>t&&(t=e[i].offsetHeight);for(let i=0;i<e.length;i++)e[i].style.height=t+"px"}window.onload=()=>{const e=t=>{for(let e=0;e<s.length;e++)c[e].classList.remove("review_active"),c[e].classList.remove("review_inactive"),s[e].classList.remove("dots__dot_active");t<0&&(t=r=c.length-1),t>c.length-1&&(t=r=0),d!=r&&c[d].classList.add("review_inactive"),c[t].classList.add("review_active"),s[t].classList.add("dots__dot_active"),d=r,clearTimeout(o),o=setTimeout((()=>{w(),e(r+=1)}),5e3)};for(l=0;l<s.length;l++)s[l].addEventListener("click",(function(){w(),e(r=s.indexOf(this))}));const t=e=>{for(let e=0;e<a.length;e++)a[e].classList.remove("picture_active"),a[e].classList.remove("picture_inactive");e<0&&(e=g=a.length-1),e>a.length-1&&(e=g=0),v!=g&&a[v].classList.add("picture_inactive"),a[e].classList.add("picture_active"),v=g,clearTimeout(n),n=setTimeout((()=>{t(g+=1)}),5e3)};u.addEventListener("click",(function(){t(g-=1)})),m.addEventListener("click",(function(){t(g+=1)})),t(g),e(r)};
//# sourceMappingURL=index.05d5431c.js.map