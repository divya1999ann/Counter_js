
function func(){
    if(document.getElementById("t1").value=="0"){
    alert("Value has reached 0");
    document.getElementById("t1").value = "25";
    }
}


function funcstart(d){
    if (d.interval){
        clearInterval(d.interval);
        d.interval=undefined;
    } else {
        d.interval=setInterval(function(){
            var c = document.getElementById("t1").value;
            c = parseInt(c);
            c = c-1;
            if(c==-1){
            alert("Count reached 0");
            c=25;
            clearInterval(d.interval);
        d.interval=undefined;
        }
        document.getElementById("t1").value = c.toString();
        },500);
    }
}



function funcplus() {
    var x = document.getElementById("t1").value;
    var val = parseInt(x);
    val = val+1;
    document.getElementById("t1").value = val.toString();
}


function funcminus() {
    var x = document.getElementById("t1").value;
    var val = parseInt(x);
    val = val-1;
    document.getElementById("t1").value = val.toString();
}


function funcreset(){
    document.getElementById("t1").value = "25";
}