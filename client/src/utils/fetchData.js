export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "73297c4cebmsh5666962f2b2b620p1ba60bjsncddbc46c15ca",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "73297c4cebmsh5666962f2b2b620p1ba60bjsncddbc46c15ca",
  },
};

export const dietOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "73297c4cebmsh5666962f2b2b620p1ba60bjsncddbc46c15ca",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

export const fetchWorkOutData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const fetchDietData = () =>
  fetch("https://edamam-recipe-search.p.rapidapi.com/search?r=protien%20", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
    },
  })
    .then((response) => {
      console.log("response ==>", response.body);
    })
    .catch((err) => {
      console.error(err);
    });
