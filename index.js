/* eslint-disable no-unused-vars */
const{ connect } =require("./connectDB.js");    //require Pakages
const Todo =require("./Todomodel.js");

const createTodo =async () => {         //create the Fun for createTodo
    try{
        await connect();
        const todo =await Todo.addTask({
            title:"second Item",
            DueDate:new Date(),
            completed:false,
        });
        console.log(`created todo with ID: ${todo.ID}`);
    }
    catch(error){                       //imidiate invoke Fun
        console.log(error);             //invoke this Fun
    }
}; 

const countItems =async () =>{          //for count a todo in table
    try {
        const totalcount =await Todo.count();
        console.log(`found $(totalcount) items in the table!`);
    }catch(error){
        console.log(error);
    }
}

const getAllTodos =async () =>{             //retrive a data from the database
    try{
        // const todos =await Todo.findAll();
        const todos =await Todo.findAll({
            where: {                        //It while filter the result base on condition
                completed:false
            },
            order: [
                ['id','ASC']                //passing id with assending order
            ]
        })
        const todolist = todos.map(todo =>todo.displayablestring()).join("\n");
        console.log(todolist);
    }catch(error){
        console.log(error)
    }
}

// const getSingleTodo =async () =>{             //retrive a data from the database
//     try{
//         // const todos =await Todo.findAll();
//         const todos =await Todo.findOne({
//             where: {                        //It while filter the result base on condition
//                 completed: false
//             },
//             order: [
//                 ['id','ASC']                //passing id with assending order
//             ]
//         })
//         const todolist = todos.map(todo =>todo.displayablestring()).join("\n");
//         console.log(todolist);
//     }catch(error){
//         console.log(error)
//     }
// }

(async () =>{
    // await createTodo();
    // await countItems();
    await getAllTodos();
})();