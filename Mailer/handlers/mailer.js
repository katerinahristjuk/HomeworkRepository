const mailer =require('../pkg/mailer/index')

const sendMail = async (req, res) => {
    let condition = 
        req.body.to &&
        req.body.to.trim().length > 0 &&
        req.body.subject &&
        req.body.subject.trim().length > 0 &&
        req.body.text &&
        req.body.text.trim().length > 0 ;
    
    if (condition) {
        await mailer.send(
            req.body.to,
            req.body.subject,
            req.body.text
        );

        return res.status(200).send(req.body.text);
    }

    return res.status(500).send('Internal server error :(');
};

//exports
module.exports = {
    sendMail
};