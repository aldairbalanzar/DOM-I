function myFunction() {
    setInterval(function(){ 
        for(var i = 0; i < 10; i++) {
            document.getElementById(msTens).innerHTML = i;
        } ;
     }, 10);
  }