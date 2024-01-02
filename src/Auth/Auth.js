import { Client, Account,Databases, ID } from "appwrite";
import conf from "../Conf/conf.js";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65731846d759f540680b");

const account = new Account(client);  
const databases= new Databases(client); 


const createUserDB = async(name,email,password,college,course,branch,semester,dob)=>{
        let isSignupSucces=signup(email,password);
        if(isSignupSucces){
            await databases.createDocument(
                "6581e80a0457886be1d2",
                "6581e8179e07a0c92aa3",
                ID.unique(),
                {
                    name:name,
                    email:email,
                    password:password,
                    college:college,
                    course:course,
                    branch:branch,
                    semester:semester,
                    dob:dob,

                }
            )
        }

}



const signup = async (email,password)=>{
    let isSignupSuccess=true;
    try{
        await account.create(ID.unique(),email,password);
        return isSignupSuccess;
    }catch(error)
    {
        throw error;
    }
}


const login = async(email,password)=>{
    try{
        return await account.createEmailSession(email,password);
    }catch(error){
        throw error;
    }
}


const getCurrentUser = async()=>{
    try{
       return account.get();
    }catch(error)
    {
        throw error;
    }
    
}

const logout = async()=>{
    try{
       await account.deleteSession("current");
    }catch(error){
        throw error;
    }
}


export {createUserDB,signup,login,getCurrentUser,logout};