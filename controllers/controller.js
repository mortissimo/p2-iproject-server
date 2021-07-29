const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: 'agencyoftalents999@gmail.com',
        pass: 'hacktiv8'
    }
})

class Controller{
    static saveToEmail(req, res, next) {
        const {email} = req.query
        // console.log("MASUK DLU", req.body.messages, email);
        let messages = req.body.messages.map(data =>{
            return `<p><b>${data.name}</b> ${data.time}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.message}</p> `
        })
        // console.log(messages.join(''));
        let mailOptions = {
            from : 'agencyoftalents999@gmail.com',
            to: `${email}`,
            subject: 'CHAT LOG',
            html: `${messages.join('')}`
        }
        transporter.sendMail(mailOptions, function(err, data){
            if (err){
                next({
                    name: "InternalServerError",
                    message: err.message
                })
            }else{
                res.status(200).json('Email has been sent')
            }
        })
    }
}

module.exports = Controller