//Track whether there are unsaved changes
let unsavedChanges = false;

//Function to set unsaved changes to true when form changes
function handleFormChange() {
    unsavedChanges = true;
}

//Attach event listener to form elements
const form = document.getElementById("myForm");
const formElements = form.querySelectorAll("input", "textarea", "select");
formElements.forEach((element) => {element.addEventListener("input", handleFormChange);});

//Alert the User when leaving with unsaved changes
window.addEventListener("beforeunload", 
    function (e) {
        if (unsavedChanges) {
            e.preventDefault();
            e.returnValue = "";
        }
    });

//Handle form submission
form.addEventListener("submit", function (){
    //Reset the unsavedChanges Flag
    unsavedChanges = false;
});