(function(){

// get animate on touch containers
var aot = document.getElementsByClassName( 'aot' );

document.body.addEventListener( 'touchend', function( event ){
  for (var i = 0; i < aot.length; i++) {
    if ( aot[i].contains( event.target) ) {
      aot[i].classList.toggle( 'touched' );
    } else {
      aot[i].classList.remove( 'touched' );
    }
  }
}, false)

})()
