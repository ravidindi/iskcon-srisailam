const express = require("express");
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;



app.use(cors({
  origin: 'http://localhost:3000', // Allow only this origin
}));

// middlewares
app.use(express.json({ extended: false }));

// route included
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));