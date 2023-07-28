const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jean:123@cluster0.kbgmu2q.mongodb.net/r18jwt?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
