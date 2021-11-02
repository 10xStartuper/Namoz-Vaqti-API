const { default: axios } = require("axios");

// Make a request for a user with a given ID

const getData = () =>
  axios
    .get("https://shosh.uz/uz/namoz-vaqtlari-toshkent/")
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      return error;
    });

module.exports = getData;
