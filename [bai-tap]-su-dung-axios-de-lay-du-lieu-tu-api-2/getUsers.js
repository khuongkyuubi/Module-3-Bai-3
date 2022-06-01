const axios = require("axios");

async function getUsers() {
    try{
        return await axios.get("https://jsonplaceholder.typicode.com/users");
    } catch (err) {
        console.log(err)
    }
}

getUsers()
.then(response => {
    console.log(response.data)
})