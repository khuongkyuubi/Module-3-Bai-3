const axios = require("axios");
// const fetch = require("node-fetch");

const getJSONAPI = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://jsonplaceholder.typicode.com/posts/1")
            .then((json) => {
                resolve(json.data)
            });
    });
}

// axios hỡ trợ chuyển đỏio từ json sang object luôn

getJSONAPI()
    .then(result => {
        console.log(result);
    })


// Viết bằng fecth

// fetch("http://jsonplaceholder.typicode.com/posts/1")
// .then(data => {return data.json()})
// .then(result => {
//     console.log(result)
// })