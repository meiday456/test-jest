const express = require("express")

const app = express()
app.get("/user",
    (req, res) => res.json({name: "kang"})
)

app.listen(3000, ()=>console.log("Listen => localhost :3000"))

export default app

