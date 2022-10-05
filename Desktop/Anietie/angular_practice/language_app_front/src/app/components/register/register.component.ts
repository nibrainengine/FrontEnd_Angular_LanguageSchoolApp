import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  TAndC: string = "This is the terms and conditions for registering";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  termsAndCondition() {
    return alert(this.TAndC)
  }

  submitForm() {
    console.log(this.reactiveForm.value);
    return this.reRoute();
  }

  reRoute(){
    if(this.reactiveForm.value.email != "") {
      this.route.navigate(['profile'])
    }
    
  }

  matchValidators(source: string, target: string): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      return sourceCtrl && targetCtrl && sourceCtrl.value != targetCtrl.value
      ?{mismatch: true}
      : null;

    }
  }

  reactiveForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    imageUrl: new FormControl(''),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required)  
  },
  [this.matchValidators('password', 'confirmPassword')])

}
