(function(){

var interaction = document.getElementsByClassName( 'albers-interaction' )[0];
var color = document.getElementsByClassName( 'albers-color' )[0];
var perc = document.getElementsByClassName( 'percussion' )[0];

document.body.addEventListener( 'touchend', function( event ){
  if ( interaction.contains( event.target ) ) {
    interaction.classList.toggle( 'touched' );
    color.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
  } else if ( color.contains( event.target ) ){
    color.classList.toggle( 'touched' );
    interaction.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
  } else if ( perc.contains( event.target ) ){
    color.classList.remove( 'touched' );
    interaction.classList.remove( 'touched' );
    perc.classList.toggle( 'touched' );
  } else {
    interaction.classList.remove( 'touched' );
    color.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
  }
}, false)

})()
