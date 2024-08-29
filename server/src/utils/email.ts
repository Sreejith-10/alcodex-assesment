import { AuthModel } from "model/authModel.js"

export const emailExist = async(mail:string) =>{
    try{
        const exist = await AuthModel.findOne({userEmail:mail})
        return !!exist
    }catch(err){
        console.log(err);
    }
}