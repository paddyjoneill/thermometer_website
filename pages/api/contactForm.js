const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

export default function  handler(req, res){

    const payload = req.body

    const { name, email, subject, message } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const msg = {
        to: 'info@accsensum.com',
        from: 'paddyjoneill@hotmail.com',
        subject: subject + " from " + name + " email " + email,
        html: message,
    };

    sgMail.send(msg)
    .then(() => res.status(200).json({message: "Message Sent"}) )
    .catch(e => res.status(e.code).json({message: e.message}))

};