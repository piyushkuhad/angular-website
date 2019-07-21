import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  logr(field) {
    console.log(field);
  }

  hero="";

  onSubmit(form:NgForm){
    let contact = [];
    const formName = document.getElementById("formName");
    const formEmail = document.getElementById("formEmail");
    const formTel = document.getElementById("formTel");
    const formCity = document.getElementById("formCity");
    const formMessage = document.getElementById("formMessage");

    contact.push(form.value);
    
    for(let i=0; i < contact.length; i++) {
      formName.innerHTML = "Full Name: " + contact[i]["fullName"];
      formEmail.innerHTML = "Email: " + contact[i]["email"];
      formTel.innerHTML = "Telephone: " + contact[i]["telephone"];
      formCity.innerHTML = "City: " + contact[i]["city"];
      formMessage.innerHTML = "Message: " + contact[i]["message"];
    }

    document.getElementById("contact-section").classList.add("form-filled");
    document.getElementById("form-filled-modal").classList.add("animated", "fadeInDown", "delay-1s");

    setTimeout(()=>{
      document.getElementById("contact-section").classList.remove("form-filled");
      document.getElementById("form-filled-modal").classList.remove("animated", "fadeInDown", "delay-1s");
    },10000);

  }

}
