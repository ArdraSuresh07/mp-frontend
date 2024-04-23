import axios from "axios"//importing axios.this import method is used bcz it is ES6


export const commonAPI=async (httpMethod,url,reqBody)=>{//parameters are given according to the axios configuration
    let reqConfig={
        method:httpMethod,//here keys are permenant.we cannot change it.
        url,//url do not have to give the value.bcz key and value have the same name
        headers:{
            "Content-Type":"application/json"//bcz contents are uploaded only from the internet not from the system
        },
        data:reqBody//parameters are given according to the axios configuration
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{//for handling errors
        return err
    })
}