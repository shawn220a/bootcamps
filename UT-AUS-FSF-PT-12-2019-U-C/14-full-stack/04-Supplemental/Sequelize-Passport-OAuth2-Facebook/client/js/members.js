$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  getUser().then(function (response) {
    $(".member-name").text(response.data.email);
  });
});
