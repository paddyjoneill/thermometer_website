const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

export default function handler(req, res){

    const payload = JSON.parse(req.body)
    const { name, email, subject, message } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const msg = {
        to: 'info@accsensum.com',
        from: email,
        subject: subject + " from " + name,
        html: message,
    };

    try{
        await sgMail.send(msg)
        
        res.status(200).json({message: "Message Sent"})
        // return {
        //     statusCode: 200,
        //     body: "Message sent"
        // }
    } catch(e){

        res.status(e.code).json({message: e.message})
        // return {
        //     statusCode: e.code,
        //     body: e.message
        // }
    }
};