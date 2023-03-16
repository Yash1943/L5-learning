const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {     //add a static Method

  static async addTask(params) {
    return await Todo.create(params)
  }

  displayablestring(){      //instance Method available on instance of the class
    return'${this.id}, ${this.title} - ${this.dueDate}'
  }
}
Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

Todo.sync();
module.exports = Todo;