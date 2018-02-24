var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp = '';
var i;
function genPass(plength){
     temp= '';
    for(i=0;i<plength;i++){
        temp+= keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return temp;
}

function grabber(passlength) {
    document.passGen.output.value = genPass(passlength);
        
}