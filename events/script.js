( function() {
  const httpRequest = new XMLHttpRequest();

  if ( ! httpRequest ) {
    return false;
  }

  function addSlides() {
    if ( httpRequest.readyState === XMLHttpRequest.DONE ) {
      if ( httpRequest.status === 200 ) {
        const template = document.querySelector( "#events" );
        const section = document.querySelector( "#content section" );
        const response = JSON.parse( httpRequest.responseText );

        for ( let value of response ) {
          section.appendChild( document.importNode( template.content, true ) );

          const slides = document.querySelector( ".slides:last-of-type" );

          slides.querySelector( ".date" ).textContent = value.acf[ "event-date" ];
          slides.querySelector( ".event" ).textContent = value.title.rendered;
          slides.querySelector( ".desc" ).innerHTML = value.content.rendered;
        }
      } else {
        console.error( "There was a problem with the request." );
      }
    }
  }

  httpRequest.onreadystatechange = addSlides;
  httpRequest.open( "GET", "http://localhost/wordpress/wp-json/wp/v2/pages?parent=8742" );
  httpRequest.send();
} )();