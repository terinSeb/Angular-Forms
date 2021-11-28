import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genders = ['male', 'female'];
  title = 'Angular-Forms';
  defaultValue = 'pet';
  answer = '';
  @ViewChild('f') signupform: NgForm;
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signupform.form.patchValue({
      userData: {
        username: suggestedName,
      },
      secret: 'pet',
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(form.value);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.userName = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.secretQuestion = this.signupform.value.secret;
    this.user.answer = this.signupform.value.questionAnswer;
    this.user.gender = this.signupform.value.gender;

    this.signupform.reset();
  }
}
