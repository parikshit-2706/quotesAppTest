import axios from "axios";

const options = {
  method: "POST",
  url: "https://motivational-quotes1.p.rapidapi.com/motivation",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "f01cd2e788msh79a1ca825ebb054p16395bjsn9d20a26b241c",
    "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
  },
  data: '{"key1":"value","key2":"value"}'
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
