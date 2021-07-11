const el=document.querySelector(".item");
el.addEventListener('mousedown',mousedown);


function mousedown(e){
  window.addEventListener('mousemove',mousemove);
  window.addEventListener('mouseup',mouseup);

  let preX=e.clientX;
  let preY=e.clientY;

  function mousemove(e){
    let newX=preX-e.clientX;
    let newY=preY-e.clientY;

    const rect=el.getBoundingClientRect();

    el.style.left=rect.left-newX+"px";
    el.style.top=rect.top-newY+"px";

    preX=e.clientX;
    preY=e.clientY;
  }
  function mouseup(){
    window.removeEventListener('mousemove',mousemove);
    window.removeEventListener('mouseup',mouseup);
  }

}

// const resizers=document.querySelectorAll(".resizer");
// let currentResizer;
// for(let resizer of resizers){
//   resizer.addEventListener('mousedown',mousedown);

//   function mousedown(e){
//     currentResizer=e.target;
//     let preX=e.clientX;
//     let preY=e.clientY;

//     window.addEventListener('mousemove',mousemove);
//     window.addEventListener('mouseup',mouseup);

//     function mousemove(e){
//       const rect=el.getBoundingClientRect();
//       if(currentResizer.classList.contains('se')){
//         el.style.width=rect.width-(PreX - e.clientX) + "px";
//         el.style.height=rect.height-(PreY - e.clientY) + "px";
//       }
//       preX=e.clientX;
//       preY=e.clientY;
//     }

//     function mouseup(){
//     }
//   }
// }

const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}