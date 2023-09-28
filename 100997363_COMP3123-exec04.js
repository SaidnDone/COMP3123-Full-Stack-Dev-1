var express = require('express')

const SERVER_PORT = 8089

var app = express()

app.use("/test",express.static("./public"))
express.json()

//app.get("index",(req, res) =>{
  //  res.sendFile(__dirname + "/public/index.html")
//})


//htpp://localhost:8089
app.get("/",(req, res) => {
    res.status(201).send("<h1>Welcome to Express Server</h1>")
    //res.end()
})

//http://localhost:8089/home
app.get("/home", (req, res) =>{
    //res.status(200).send()
    res.send("Hello Express JS")

})


//http://localhost:8089/user?firstname=said&lastname=mohamed
app.get("/user", (req, res) => {
    const { firstname, lastname } = req.query;
  
    if (!firstname || !lastname) {
      return res.status(400).json({ error: "Both firstname and lastname are required." });
    }
  
    const user = {
      firstname,
      lastname,
    };
  
    res.json(user);
  });
//http://localhost:8089/said/mohamed
  app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
  
    const user = {
      firstname,
      lastname,
    };
  
    res.json(user);
  });
  



app.listen(SERVER_PORT, () => {
    console.log("Serving running at htpp://localhost:" + SERVER_PORT)
})