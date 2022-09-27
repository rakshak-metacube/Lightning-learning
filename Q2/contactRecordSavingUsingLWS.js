import { LightningElement,track } from 'lwc';
import createContact from '@salesforce/apex/insertContactApexWeb.saveContactRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ContactRecordSavingUsingLWS extends LightningElement {
    firstname = '';
    lastname = '';
    email = '';
    phone = '';
    fax = '';

    @track rec = {
        FirstName : this.firstname,
        LastName : this.lastname,
        Email : this.email,
        Phone : this.phone,
        Fax : this.fax,
    }
    handleFirstNameChange(event) {
        this.rec.FirstName = event.target.value;
        window.console.log("FirstName", this.rec.FirstName);
    }
    
    handleLastNameChange(event) {
        this.rec.LastName = event.target.value;
        window.console.log("LastName", this.rec.LastName);
    }
    handleEmailChange(event) {
        this.rec.Email = event.target.value;
        window.console.log("Email", this.rec.Email);
    }
    handlePhoneChange(event) {
        this.rec.Phone = event.target.value;
        window.console.log("Phone", this.rec.Phone);
    }
    handleFaxChange(event) {
        this.rec.Fax = event.target.value;
        window.console.log("Fax", this.rec.Fax);
    }
    handleClick() {
        createContact({ con : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.FirstName = '';
                    this.rec.LastName = '';
                    this.rec.Email = '';
                    this.rec.Phone = '';
                    this.rec.Fax = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title : 'Success',
                            message : 'Account created',
                            variant : 'success',
                        }),
                    );
                }
                
                window.console.log( JSON.stringify(result ));
                window.console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title : 'Error creating record',
                        message : error.body.message,
                        variant : 'error',
                    }),
                );
                window.console.log("error", JSON.stringify(this.error) );
            });
    }
    
}