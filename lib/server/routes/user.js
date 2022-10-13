const axios = require("axios");

exports.fast = async (req, res) => {
    let uri = "https://jsonplaceholder.typicode.com/users";
    const result = await axios.get(uri);
    return res.status(200).send(result.data);
};

exports.slow = async (req, res) => {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(async () => {
        let uri = "https://jsonplaceholder.typicode.com/users";
        const result = await axios.get(uri);
        console.log("SENDING SLOW");
        return res.status(200).send(result.data);
    });
};
