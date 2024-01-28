const http = require("http")


const app= require("./src/config/express.config")  //it is used to import 



const server = http.createServer((app) => {
  console.log(request)
  response.end("hello world")
})


server.listen(5000, "127.0.0.1", (err) => {
if(!err) {
console.log("Server is running on port 3000")
console.log("Press CTRL+C to disconnect server")
}
})