import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: UntypedFormGroup
  private _url: string = "../../../assets/login.json"
  constructor(private formbuilder: UntypedFormBuilder, private http: HttpClient, private router: Router, private loginServe: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  navigateToHomePage() {
    this.router.navigate(['/']);
  }
  login() {
    this.loginServe.get()
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
        if (user) {
          alert('Login Succesful');
          this.loginForm.reset()
          this.router.navigate(["/admincomponent"])
        } else {
          alert("Invalid Login Details")
        }
      }, err => {
        alert("Something went wrong")
      })
  }
}
