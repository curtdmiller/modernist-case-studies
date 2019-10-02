(function(){

var interaction = document.getElementsByClassName( 'albers-interaction' )[0];
var color = document.getElementsByClassName( 'albers-color' )[0];

document.body.addEventListener( 'touchend', function( event ){
  if ( interaction.contains( event.target ) ) {
    interaction.classList.toggle( 'touched' );
    color.classList.remove( 'touched' );
  } else if ( color.contains( event.target ) ){
    color.classList.toggle( 'touched' );
    interaction.classList.remove( 'touched' );
  } else {
    interaction.classList.remove( 'touched' );
    color.classList.remove( 'touched' );
  }
}, false)

})()
