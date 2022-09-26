({
    createContact : function(Component, newContact) {
        let action = Component.get("c.createRecord");
        action.setParams({
            "cnt":newContact
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                Component.set("v.newContact", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})