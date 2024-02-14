import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { Router } from '@angular/router';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup; // Declare form as a FormGroup
  showAlert: boolean = false;
  loading: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  
  isLoading: boolean = false;
  isNorm: boolean = true;
  constructor(private fb: FormBuilder, 
    private router: Router,) {
    this.form = this.fb.group({});
  } // Inject FormBuilder

  ngOnInit(): void {
    // Initialize form controls using FormBuilder
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  handleSubmit() {
    console.log("Done")
    if (this.form.valid) { // Check if form is valid before submitting
      this.loading = true;
      emailjs.send('service_gzoxqgg', 'template_rke6iam', {
        from_name: this.form.value.name,
        from_email: this.form.value.email,
        from_subject: this.form.value.subject,
        message: this.form.value.message,
      }, '0N5dHBgT9Q4g-8Eye')
        .then((response: EmailJSResponseStatus) => {
          this.loading = false;
          this.showAlert = true;
          this.isLoading = true
          this.isNorm = false;
          setTimeout(() => {
            this.isLoading = false; // Hide loading screen
            this.isNorm = true
            this.router.navigate(['/']); // Navigate after a slight delay
          }, 3000);
          setTimeout(() => {
            this.showAlert = false;
            this.form.reset();
             // Reset form after successful submission
          }, 3000);
        })
        .catch((error) => {
          this.loading = false;
          this.showAlert = true;
          this.alertMessage = 'Failed to send email. Please try again later.';
          this.alertType = 'error';
          console.error(error);
        });
    }
  }
}
