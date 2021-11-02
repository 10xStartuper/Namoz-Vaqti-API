const { default: axios } = require("axios");

// Make a request for a user with a given ID

const getData = () =>
  axios
    .get("https://shosh.uz/wp-json/wp/v2/pages/11559")
    .then(function (response) {
      // handle success
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      return error;
    });

module.exports = getData;
