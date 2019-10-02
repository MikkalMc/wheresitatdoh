import axios from 'axios';

// THIS IS AN EXAMPLE PATTERN FOR HOW WE SHOULD HANDLE API REQUESTS ON THIS PROJECT
// The success and error logic is decoupled from the following function
// wherever this api is utalized, the success and error callbacks should be defined.
// View App.vue to see how this is done
const getCompAPI = (success, error) => {
  axios.get("https://api.metalab.csun.edu/curriculum/api/2.0/classes/comp").then(
    response => success(response.data),
    response => error(response)
  )
}


export default {
  getCompAPI
}
