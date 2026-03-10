// Create mini-express app(Seperate route)
import exp from 'express'
export const userApp=exp.Router()


//Test Data 
let users=[]
// Create API(REST --> Representational State Transfer)

    // Route to handle GET request of client(http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        // Read all users
        res.json({message:"all users",payload:users});
    })

    // Route to handle get request of client with an id

    userApp.get('/users/:id',(req,res)=>{
        //get id from the url
        let idOfUrl=Number(req.params.id);
        //find user
        let user=users.find((userObj)=>userObj.id===idOfUrl)
        //response
        if(user===undefined){
            return res.json({message:"user not found"});
        }
        res.json({message:`user ${idOfUrl} `,payload:user});
    })
    // Route to handle POST request of client
    userApp.post('/users',(req,res)=>{
       // get user from client
        const newUser=req.body;
        console.log(newUser);
        
        //push user into users
        users.push(newUser);
        //send response
        res.json({message:"User created"});

    })
    // Route to handle PUT request of client
    userApp.put('/users',(req,res)=>{
        // get modifiedd data from user
        let modifiedUser=req.body;
        //get inded of existing user in users array
        let index= users.findIndex((userObj)=>userObj.id===modifiedUser.id);
        //if index not found(user not there)
        if(index===-1){
            return res.json({message:"User not found"});
        }
        //Update the user in the array
        users.splice(index,1,modifiedUser);
        //response to the client
        res.json({message:"The user's data is updated"});
    })
    // Route to handle DELETE request of client
    userApp.delete('/users/:id',(req,res)=>{
        // get id of user from url parameter
        let idOfUrl=Number(req.params.id);
        // find index of user
        let index=users.findIndex((userObj)=>userObj.id===idOfUrl);
        if(index===-1)
            return res.json({message:"User not found"});

        // delete user by index
        users.splice(index,1);
        // send res
        res.json({message:"User deleted"}); 
    });