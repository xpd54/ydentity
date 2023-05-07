import axios from "axios";
const addService = (endpoint, body, callback) => {
  axios.post(`http://192.168.1.101:3000/${endpoint}`, body)
  .then((response) => {
    console.log(response.data)
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    callback()
  })
};

export default addService;
