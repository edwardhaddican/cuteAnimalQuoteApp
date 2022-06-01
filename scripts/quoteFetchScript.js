const axios = require("axios");
const fs = require('fs');

const fetchAllQuotes = async () => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");

    const quoteArr = response.data.map(e => e.text)
    fs.writeFileSync('./quotes.json', JSON.stringify(quoteArr))

  } catch (err) {
    throw err;
  }
};


fetchAllQuotes()
