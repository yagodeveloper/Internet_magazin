 const nodemailer = require("nodemailer")
const { EMAIL, PASS } = require("../../config")

 async function email(to, subject,text,html){
     try{
        const transport = await nodemailer.createTransport({
            host:"smtp.yandex.ru",
            port:465,
            secure:true ,
            auth:{
                user:EMAIL,
                pass:PASS,
            }
        })
   
        return await transport.sendMail({
            from:'"Yagodeveloper"<yagocoder@yandex.com>',
            to,
            subject,
            text,
            html,
        })
     }catch(e){
console.log(e)
     }
 }


 module.exports = email