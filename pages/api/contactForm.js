const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

export default function  handler(req, res){

    console.log({req: req.body})

    const payload = req.body

    const { name, email, subject, message } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const msg = {
        to: 'info@accsensum.com',
        from: email,
        subject: subject + " from " + name,
        html: message,
    };

    sgMail.send(msg)
    .then(() => res.status(200).json({message: "Message Sent"}) )
    .catch(e => res.status(e.code).json({message: e.message}))

};