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