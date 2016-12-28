var loop, x, y;
$(document).mousedown(function(e){
  clearInterval(loop);
  x = e.pageX;
  y = e.pageY;
  loop = setInterval(function(){
    explosion();
  },150);
  $(document).mousemove(function(f){
    x = f.pageX;
    y = f.pageY;
  });
}).mouseup(function(){
  clearInterval(loop);
});

function explosion() {
  var red = Math.ceil(Math.random()*256);
  var green = Math.ceil(Math.random()*256);
  var blue = Math.ceil(Math.random()*256);
  var color = red.toString(16) + green.toString(16) + blue.toString(16);
  
  $('body').append('<div style="top:'+y+'px;left:'+x+'px;" class="explosion"><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div><div style="background:#'+color+';"></div></div>');
  setTimeout(function(){
    $('.explosion:first').remove();
  },500);
};