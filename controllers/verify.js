const axios = require('axios');
const verifyMail = async (req,res) => {
    try {
        let response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: '6LdKIXohAAAAAN5e-bejaHFQPoDSgT9um5tTGC1b',
    response: req.body.token
  })
 
  res.send(response)
}  
catch(e) {
    console.log(e)
}
    }


module.exports = verifyMail