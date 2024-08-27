/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {
    onDocumentWritten,
    onDocumentCreated,
    onDocumentUpdated,
    onDocumentDeleted,
    Change,
    FirestoreEvent
} = require("firebase-functions/v2/firestore");


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");


const mailTransport = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
        user: "onlinestanmed@gmail.com",
        pass: "vuom grie fphh fhps"
    }
});


exports.sendEmail = onDocumentCreated("mail/{docId}", (event) => {

    const snapshot = event.data;

    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }

    const mailData = snapshot.data();

    const mailOptions = {
        from: `onlinestanmed@gmail.com`,//`website@stanmed.global`,
        to: `website@stanmed.global`,
        subject: mailData.message.subject,
        text: mailData.message.text,
        html: mailData.message.html,

    };

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });

});