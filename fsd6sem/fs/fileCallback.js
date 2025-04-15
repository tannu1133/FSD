import fs from "fs"
const callbackwriter = () => {
    fs.writeFile(".dataCallback.csv", "This is trhe callback file", (err)=>{
        if (err){
            console.log("unable to write file, (callback)",(err));    
        }
        else{
            console.log("file has been written succesfully (callback)")
        }
    }
)
return "message"
}
const callbackReader=()=>{
    fs.readFile(".dataCallback.csv", "utf-8",(err,data)=>
    {
        if (err){
            console.log("Unable to read data,(callback)",err);

        }
        else{
            console.log("Data is:", data)
        }
    })


}
export default{callbackwriter,callbackReader};