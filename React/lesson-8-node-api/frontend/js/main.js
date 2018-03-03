window.onload = () => {
  $.post( "ajax/user/add", function( data ) {
    $( ".result" ).html( data );
  });
};