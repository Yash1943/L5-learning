// connectDB.js

const Sequelize = require("sequelize");

const sequelize = new Sequelize('Todo_db', 'postgres', 'Yash@194', {
  host: "localhost",
  dialect: "postgres",
  loggin:false,
});

const connect =async() =>{
  return sequelize.authenticate();
}

module.exports ={
  connect,
  sequelize
}
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });
