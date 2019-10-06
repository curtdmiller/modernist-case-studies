(function(){

var interaction = document.getElementsByClassName( 'albers-interaction' )[0];
var color = document.getElementsByClassName( 'albers-color' )[0];
var perc = document.getElementsByClassName( 'percussion' )[0];
var perciii = document.getElementsByClassName( 'percussion-vol3' )[0];

document.body.addEventListener( 'touchend', function( event ){
  if ( interaction.contains( event.target ) ) {
    interaction.classList.toggle( 'touched' );

    color.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
    perciii.classList.remove( 'touched' );
  } else if ( color.contains( event.target ) ){
    color.classList.toggle( 'touched' );

    interaction.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
    perciii.classList.remove( 'touched' );
  } else if ( perc.contains( event.target ) ){
    perc.classList.toggle( 'touched' );

    color.classList.remove( 'touched' );
    interaction.classList.remove( 'touched' );
    perciii.classList.remove( 'touched' );
  } else if ( perciii.contains( event.target ) ){
    perciii.classList.toggle( 'touched' );

    color.classList.remove( 'touched' );
    interaction.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
  } else {
    interaction.classList.remove( 'touched' );
    color.classList.remove( 'touched' );
    perc.classList.remove( 'touched' );
    perciii.classList.remove( 'touched' );
  }
}, false)

})()
