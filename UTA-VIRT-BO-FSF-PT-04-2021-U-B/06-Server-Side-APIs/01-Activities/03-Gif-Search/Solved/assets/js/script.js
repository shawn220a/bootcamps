// Create a function called `myFunction()`
function myFunction() {
  // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
  // Use `.value` to capture the value of the input and store it in the variable
  var searchTerm = document.querySelector('#searchTerm').value;

  // Make a `fetch` request concatenating the `searchTerm` to the query URL
  // Remember to add your API key at the end
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchTerm +
      '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data[0]);
      // Create a variable that will select the <div> where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');

      // Empty out the <div> before we append a GIF to it
      responseContainerEl.innerHTML = '';

      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

      // Append 'gifImg' to the <div>
      responseContainerEl.appendChild(gifImg);
    });
}
