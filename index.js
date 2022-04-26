const app = require("./app");
const dotenv = require("dotenv");

// env
dotenv.config();

// listen server
app.listen(process.env.PORT, () => {
  console.log(`listen server on port ${process.env.PORT}`);
});
