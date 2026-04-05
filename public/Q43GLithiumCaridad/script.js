function plotPoint(x0,y0,x,y) { // added arguments to function (1)
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x - x0 + 200) + 'px'; // subtract half the width of the point to center it by changing left css property (made both of these style.left and style.bottom respectively (2))
    point.style.bottom = (y - y0 + 200) + 'px'; // subtract half the height of the point to center it by changing bottom css property (changed - 200  +5 to just + 200 to center it on axis)
    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
} // added end of function (3)