// main container
var box1 = document.createElement("div");
// box1.style.marginLeft = 25 + '%';
box1.style.height = 500 + "px";
box1.style.width = 500 + "px";
box1.style.border = "2px solid black";
box1.style.backgroundColor = "#181818";
box1.style.position = "relative"
document.body.appendChild(box1);
// inner box
var box2 = document.createElement("div");
box2.style.height = 200 + "px";
box2.style.width = 200 + "px";
box2.style.backgroundColor = "white";
box2.style.position = "absolute";
box1.appendChild(box2);

var details = document.getElementById('details');
var id = 0;
// play() 
function play() {
    id = setInterval(move, 1);
}
// pause()
function pause() {
    clearInterval(id);
}

var hor = 0, vertical = 0;
var limit = 450, itration = 0;
var i1 = 0, i2, i3, i4;
function move() {

    details.innerHTML = "Top:" + box2.style.marginTop + " |Left:" + box2.style.marginLeft + " |itration no:" + itration;
    if (i1 < limit) {

        i1++;
        box2.style.marginLeft = i1 + 'px';
        if (i1 == limit) {
            console.log(limit, vertical, hor);
            console.log(i1, i2, i3, i4);
            i2 = vertical;
            if (itration > 0) {
                i2 = vertical;
            }
        }
    }
    else if (i2 < limit) {
        i2++;
        box2.style.marginTop = i2 + 'px';
        if (i2 == limit) {
            console.log(limit, vertical, hor);
            console.log(i1, i2, i3, i4);
            i3 = limit;
        }
    }
    else if (i3 > hor) {
        i3--;
        box2.style.marginLeft = i3 + 'px';
        if (i3 == hor) {
            console.log(limit, vertical, hor);
            console.log('i1:', i1, i2, i3, i4);
            i4 = limit;
            limit = limit - 50;
            vertical = vertical + 50;
            hor = hor + 50;
            i3 = 0;


        }
    }
    else if (i4 >= vertical) {
        i4--;
        box2.style.marginTop = i4 + 'px';
        if (i4 == vertical) {
            console.log(limit, vertical, hor);
            console.log(i1, i2, i3, i4);
            itration++;

        }
    }
    else if (limit <= vertical || limit <= hor) {
        box2.style.marginLeft="250px";
        box2.style.marginTop="250px";
        clearInterval(box2.offsetTop);

    }
    else {
        i1 = hor - 50;
    }
}