$("#mobile_code").intlTelInput({initialCountry:"in",separateDialCode:!0,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"}),document.querySelectorAll(".ts-chocolate").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("ts-btn")})}),(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:20,slidesPerGroup:1,loop:!0,fade:!0,centerSlider:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}}}),document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".our-products-container"),o=document.querySelectorAll(".card");document.querySelector(".dot-navigation");let n=document.querySelectorAll(".dot"),l=o.length,d=0,i=!1;function a(e){o.forEach((t,o)=>{t.style.display=o>=e&&o<e+4?"block":"none"})}function c(e){n.forEach((t,o)=>{t.classList.toggle("active",o===e/4)})}function s(){d=(d+4)%l,t.style.transition="left 0.5s ease-in-out",t.style.left=`-${100*d}%`,a(d),c(d)}function r(){d=(d-4+l)%l,t.style.transition="left 0.5s ease-in-out",t.style.left=`-${100*d}%`,a(d),c(d)}function u(e){n.forEach((t,o)=>{t.classList.toggle("active",o===e)})}document.querySelector(".prev-button").addEventListener("click",()=>{r(),setTimeout(()=>{t.style.transition=""},500)}),document.querySelector(".next-button").addEventListener("click",()=>{s(),setTimeout(()=>{t.style.transition=""},500)}),t.addEventListener("mousedown",t=>{i=!0,e=t.clientX}),document.addEventListener("mousemove",t=>{if(i){let o=t.clientX-e;o>50?(r(),e=t.clientX):o<-50&&(s(),e=t.clientX)}}),document.addEventListener("mouseup",()=>{i=!1,setTimeout(()=>{t.style.transition=""},500)}),o.forEach((e,t)=>{e.addEventListener("mouseover",()=>{u((d+t)%l)}),e.addEventListener("mouseout",()=>{u(d)})}),a(d),c(d)}),(()=>{let e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.1e8b9790.js.map