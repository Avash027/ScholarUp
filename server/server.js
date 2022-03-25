const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/db")();

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use(cors());
app.use(express.json({ limit: "15mb" }));

//Routes
app.use(`/test`, require("./routes/test"));

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});
