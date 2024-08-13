import { db, doc, setDoc, collection, addDoc } from "./firebase-config.js";
import createEmailTemplate from "./email-template.js";


function openForm() {
    var formElement = document.getElementById("stanmed-form");
    formElement.classList.remove("ReactModal__Overlay--before-close");
    formElement.classList.add("ReactModal__Overlay--after-open");
}

function closeForm() {
    var formElement = document.getElementById("stanmed-form");
    formElement.classList.remove("ReactModal__Overlay--after-open");
    formElement.classList.add("ReactModal__Overlay--before-close");
}

async function submitFormDetails() {
    console.log("Start");

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var zip = document.getElementById("zip").value;

    var orgName = document.getElementById("org-name").value;
    var physiciansNo = document.getElementById("physicians-no").value;
    var orgType = document.getElementById("org-type").value; // Optional
    var biggestChallenge = document.getElementById("biggest-challenge").value; // Optional

    var isPatient = document.querySelector('input[name="radio"]:checked') ? document.querySelector('input[name="radio"]:checked').value : "";

    if (firstName !== "" && lastName !== "" && email !== "" && phone !== "" && zip !== "" && orgName !== "" && physiciansNo !== "" && isPatient !== "") {
        // set button to loading state
        var button = document.getElementById("submit-btn");

        button.disabled = true;
        button.textContent = "Loading...";

        var htmlTemplate = createEmailTemplate(firstName, lastName, email, phone, zip, orgName, physiciansNo, orgType, biggestChallenge, isPatient);

        const userDetails = {
            to: ['info@stanmed.global'],
            message: {
                subject: 'StanMed Form Submission',
                text: `Details for ${firstName} ${lastName} from ${orgName}`,
                html: htmlTemplate,
            }
        };

        try {
            const docRef = await addDoc(collection(db, "mail"), userDetails);

            console.log("Document written with ID: ", docRef.id);

            button.disabled = false;
            button.textContent = "Submit";

            // Clear inputs
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("org-name").value = "";
            document.getElementById("physicians-no").value = "";
            document.getElementById("org-type").value = "";
            document.getElementById("biggest-challenge").value = "";

            // close form
            closeForm();
        } catch (e) {
            console.error("Error adding document: ", e);

            button.disabled = false;
            button.textContent = "Submit";
        }

    }
}

window.openForm = openForm;
window.closeForm = closeForm;
window.submitFormDetails = submitFormDetails;