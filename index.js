const AWS = require('aws-sdk');

const ACCESSS_KEY_ID = '**************';
const SECRET_ACCESS_KEY = '************';

AWS.config.update({
    accessKeyId: ACCESSS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: 'us-east-1'
});

const ses = new AWS.SES({ ses: '2010-12-01' });

var params = {
    Destination: { ToAddresses: ['vanpho02@gmail.com'] },
    Message: {
        Body: { Text: { Data: 'Xin chao quy vi va cac ban.' } },
        Subject: { Data: 'Test send mail' }
    },
    ReturnPath: 'vanpho01@gmail.com',
    Source: 'vanpho01@gmail.com'
};

ses.sendEmail(params).promise()
.then(res => console.log(res))
.catch(error => console.log(error));
