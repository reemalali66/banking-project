/* Hand Writing Scripts */
var hdwrite = {
    
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
    
}
/* Hand Writing Scripts */
var hdwrite = {
    
    clear: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
}
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
    
}
var hdwrite = {

    clear: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
};
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
    
};
