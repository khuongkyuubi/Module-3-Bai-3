const axios = require("axios");

const getDataAsync = async () => {
    let json = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
    return json;
    // return new Promise((resolve, reject) => {
    //     reject(Error("Ghi de promise"))
    // })
    // throw Error("Ghi de promise")
}
// async sẽ tự động biến hàm thường thành 1 promise, mặc định sẽ wrapper 1 resolve (cái return làm data của resolve)
// có thể ghi đè promise trả về bằng cách return new Promise
getDataAsync()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })
