({
    clickCreate : function(component, event, helper) {
        console.log('Hello');
        let validExpense = component.find('contactForm').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validExpense){
            // Create the new expense
            let newContact = component.get("v.Contact");
            console.log(newContact.FirstName);
            
            console.log("Create expense: " + JSON.stringify(newContact));
            helper.createContact(component, newContact);
        }
    }
})