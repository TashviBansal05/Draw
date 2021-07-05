var last_position_of_x,last_position_of_y;
var mouseEvent="empty";
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
color="teal";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("input_colour").value;
    width=document.getElementById("width_of_pen").value;
    
    
   mouseEvent="mousedown";


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    var current_pos_mouse_x=e.clientX-canvas.offsetLeft;
    var current_pos_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_pos_mouse_x,current_pos_mouse_y);
    
        ctx.stroke();
    }
    last_position_of_x=current_pos_mouse_x;
    last_position_of_y=current_pos_mouse_y;
}
function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

