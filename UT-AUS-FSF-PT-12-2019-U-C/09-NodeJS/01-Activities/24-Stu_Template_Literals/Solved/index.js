const music = {
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  album: "Currents"
};

// write code between the <p> tags to output your objects data
const songSnippet = `
  <div class="song">
     <p>
     <h2>${music.title}</h2>
     <p class="artist">${music.artist}</p>
     <p class="album">${music.album}</p>
     </p>
  </div>
`;
const element = document.getElementById("music");
element.innerHTML = songSnippet;
