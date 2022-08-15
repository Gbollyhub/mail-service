const sgMail = require('@sendgrid/mail')

const url = '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'

const sendMail = (req, res) => {
    sgMail.setApiKey(url)    
    const msg = {
        to: 'info@tact.ng', // Change to your recipient
        from: 'noreply.tact@gmail.com', // Change to your verified sender
        subject: req.body.subject,
        text: `Name: ${req.body.name} <br/> Email: ${req.body.email} <br/>  Phone Number: ${req.body.phone} <br/> Message: ${req.body.message}`,
        html: `Name: ${req.body.name} <br/> Email: ${req.body.email} <br/>   Phone Number: ${req.body.phone} <br/> Message: ${req.body.message}`,
      }
      sgMail
        .send(msg)
        .then(() => {
          res.send("Email Sent")
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error.response.body)
        })
}

module.exports = sendMail;