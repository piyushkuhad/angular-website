import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent {
  contactIcon = "/assets/Images/email.png";
  modalOpen() {
    const modCont = document.getElementsByClassName("modal-container")[0];
    modCont.classList.add("modal-act");
  } 
  modalClose() {
    const closeIco = document.getElementsByClassName("modal-container")[0];
    closeIco.classList.remove("modal-act");
  }

  //Reactive Forms
  contactModal=new FormGroup({
    modalName: new FormControl('Piyush Kuhad', Validators.required),
    modalEmail: new FormControl(),
    modalTel: new FormControl(),
    modalCity: new FormControl(),
    modalMsg: new FormControl()
  })

  onContact(){
    console.log(this.contactModal)
  }




}
