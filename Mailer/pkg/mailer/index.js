//basic set-up
const formData = require('form-data'); //install form-data
const Mailgun = require('mailgun.js'); //install mailgun.js
const config = require('../config'); 

const send = async (to, subj, msg) => { // to = e recipient, a msg = e porakata
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: `${config.get('mailer').username}`, 
        key: config.get('mailer').api_key
    });
    
    try {
        let send = await mg.messages.create(
            config.get('mailer').domain, //1. domain
            { //2. ona sto treba da se isprati
                from: config.get('mailer').from,
                to: to, //to, subj i msg = vlezni pzrzmetri,
                subject: subj, //a to, subject i text treba da stoi vo handler i req.body
                text: msg
            }
        )
        console.log(send);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { send };

