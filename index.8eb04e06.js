$(document).ready((function(){$(".slider ").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,dots:!0,fade:!0,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:520,settings:{slidesToShow:1}}]})})),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelectorAll(".mob-list__link"),n=()=>{const o="true"===e.getAttribute("aria-expanded")||"false";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};e.addEventListener("click",(()=>{n();for(var e=0;e<o.length;e++)o[e].onclick=function(e){e.preventDefault(),n()}}))})();const e=document.querySelectorAll("._anim-items");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const n=e[t],i=n.offsetHeight,s=o(n).top,l=4;let c=window.innerHeight-i/l;i>window.innerHeight&&(c=window.innerHeight-window.innerHeight/l),window.scrollY>s-c&&window.scrollY<s+i?n.classList.add("_active"):n.classList.contains("_anim-no-hide")||n.classList.remove("_active")}}function o(e){const t=e.getBoundingClientRect(),o=window.scrollX||document.documentElement.scrollLeft,n=window.scrollY||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),100)}
//# sourceMappingURL=index.8eb04e06.js.map
