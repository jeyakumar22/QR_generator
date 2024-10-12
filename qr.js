var imgbox=document.getElementById("imgbox");
var qrimg=document.getElementById("qrimg");
var qrtext=document.getElementById("qrtext");
var button=document.getElementById("button");


button.addEventListener("click",function() {
    if(qrtext.value.length > 0){
      qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrtext.value;
      imgbox.className="showimg";
        }
    else{
     
     qrtext.className="error";
     
     setTimeout(() => {
        qrtext.className="";
        alert("enter something");
     }, 1000);


     
    }
});