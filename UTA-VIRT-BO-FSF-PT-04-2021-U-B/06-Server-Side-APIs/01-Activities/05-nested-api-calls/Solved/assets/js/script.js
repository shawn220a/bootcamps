function myFunction() {
  fetch(
    // Make a fetch request to Wikipedia to get a random article title
    'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*'
  )
    .then(function(wikiResponse) {
      return wikiResponse.json();
    })
    .then(function(wikiResponse) {
      // Create a variable to hold the title of the Wikipedia article
      var searchTerm = wikiResponse.query.random[0].title;

      // Display the article title above the GIF as a <h2> heading
      var responseHeaderEl = document.querySelector('#response-header');
      responseHeaderEl.innerHTML = '<h2>' + searchTerm + '</h2>';

      var rating = document.getElementById('rating').value;

      // Return a fetch request to the Giphy search API with the article title and rating parameters
      return fetch(
        'https://api.giphy.com/v1/gifs/search?q=' +
          searchTerm +
          '&rating=' +
          rating +
          '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
      );
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (response.data.length === 0) {
        console.log('Giphy could not find anything for that.');
      } else {
        console.log(response.data[0]);
        var responseContainerEl = document.querySelector('#response-container');
        responseContainerEl.innerHTML = '';
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
        responseContainerEl.appendChild(gifImg);
      }
    });
}
