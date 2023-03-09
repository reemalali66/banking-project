/* Hand Writing Scripts */
var hdwrite = {
    download: function() {
        var myImage = canvas.toDataURL("image/png");
        var img = document.getElementById('hdwrite-image');
        img.src = myImage;
        var link = document.getElementById('link');
        link.setAttribute('download', 'hdwrite.png');
        link.setAttribute('href', myImage.replace("image/png", "image/octet-stream"));
        link.click();   
    },  
    line: function(start, end, strokeStyle='black', lineWidth=2) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    },  
    getMousePos: function(cs, evt) {
        var rect = cs.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    },  
    on_drawing: false,
    addEvent: function() { 
        canvas.addEventListener("mousedown",function(evt){
            this.on_drawing = true;
            pos_start = hdwrite.getMousePos(this, evt);
        });
        canvas.addEventListener("mouseup",function(evt){
            this.on_drawing = false;
        });     
        canvas.addEventListener("mousemove",function(evt){
            if (this.on_drawing) {
                var pos = hdwrite.getMousePos(this, evt);
                hdwrite.line(pos_start, pos);   
                pos_start = pos;
            }
        });
    },  
    clear: function() { 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },  
};
