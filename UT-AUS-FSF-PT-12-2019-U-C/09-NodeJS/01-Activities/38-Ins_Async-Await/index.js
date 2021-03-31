const axios = require("axios");
const inquirer = require("inquirer");

getMovie();

async function getMovie() {
  try {
    const { movie } = await inquirer.prompt({
      message: "Search a movie:",
      name: "movie"
    });

    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    );

    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}
