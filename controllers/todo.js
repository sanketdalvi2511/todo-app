const moment=require("moment")
const Todo=require("../models/Todo")
const homeController= async(req,res,next)=>{
    try{
        const todos= await Todo.find({}).sort({createdAt : -1});
        res.locals.moment= moment;
        res.render('index.ejs',{title:"Todo App",todos})
    }catch(error){
        res.status(500).json({message : error.message})
        console.log(error.message)
    }
}

const addTodoFormController= (req,res,next)=>{
    try{
        res.render('newTodo.ejs',{title:"New Todo"})

    }catch(error){
        res.status(500).json({message : error.message})
        console.log(error.message)
    }
}

const updateTodoFormController= async(req,res,next)=>{
    try{
        const {id}=req.query
        const todo= await Todo.findById(id);
        res.render('updateTodo.ejs',{title:"Update Todo",todo})
    }catch(error){
        res.status(500).json({message : error.message})
        console.log(error.message)
    }
}

const deleteTodoFormController= (req,res,next)=>{
    try{
        const {id}=req.query;
        res.render("deleteTodo.ejs",{title:"Update Todo",id})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const addTodoController= async(req,res,next)=>{
    try{
        const {title,desc}=req.body
        if(!title){
            res.status(400).json({message:"Title is mandatory"})
        }
        const newTodo= Todo({title,desc})
        await newTodo.save()
        res.redirect('/')
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const updateTodoController= async(req,res,next)=>{
    try{
        const {id}=req.params;
        const {title,desc}=req.body
        const todo= await Todo.findById(id)
        if (!todo){
            return res.status(404).json({message:"Todo not Found"})
        }
        todo.title=title
        todo.desc=desc

        await todo.save();

        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteTodoController= async(req,res,next)=>{
    try{
        const {id,confirm}=req.query;
        if(confirm==="yes"){
            await Todo.findOneAndDelete(id)
            
        }
        res.redirect("/")

    }catch(error){
        res.status(500).json({message:error.json})
    }
}

module.exports= {homeController, addTodoFormController, updateTodoFormController,
    deleteTodoFormController, addTodoController, updateTodoController,deleteTodoController
}