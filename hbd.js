var x = document.getElementById("hbd");
var y = "happy birthday grayblade";
var i = 0;
var m="";


function randchar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

var Iid;

var intervalId = null;
var varCounter = 0;
function varName() {
    if (x.innerHTML !== y){
        if(x.innerHTML===""){
               x.innerHTML+=randchar();
           }
        else if(i===5 || i===14 || i===24){
            x.innerHTML=m;
            x.innerHTML+=" ";
            m=x.innerHTML;
            i++;
        }
       else if(x.innerHTML[i]!==y[i])
       {
           x.innerHTML=m;
           x.innerHTML+=randchar();
       }
       else
       {
        console.log('2');
            m=x.innerHTML;
           x.innerHTML+=randchar();
           i++;
       }
    console.log(x.innerHTML);
    }
    else {

        setTimeout(function() { location.replace('https://youtube.com/shorts/lrm7tq-qVEs?feature=share'); }, 2000);
        clearInterval(intervalId);
    }
};

intervalId = setInterval(varName, 5);

