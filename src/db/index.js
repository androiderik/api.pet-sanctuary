//API connection
const API_KEY= process.env.API_KEY
const URL= process.env.CAT_URL

fetch(URL, {
    headers: {
        'x-api-key': API_KEY
    }
}).then(response => response.json()).then((data) => {
    console.log(data, "cat info")
})