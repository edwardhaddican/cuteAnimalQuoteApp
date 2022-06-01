const axios = require("axios");

const fetchAllQuotes = async () => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const quoteArr = []
    response.data.map((e)=>{
      quoteArr.push(e.text)
    })
    console.log(quoteArr)
    return response.data;
  } catch (err) {
    throw err;
  }
};


fetchAllQuotes()
