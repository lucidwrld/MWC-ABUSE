import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/report/report.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-reportpage',
  templateUrl: './reportpage.component.html',
  styleUrls: ['./reportpage.component.scss']
})
export class ReportpageComponent implements OnInit {

  public reportForm: FormGroup;
  selectedFileName: string | undefined;
  
  isLoading: boolean = false;
  isNorm: boolean = true;
  constructor(
    
    private router: Router,
    private reportService: ReportService,
    public fb: FormBuilder,
    private db: AngularFireDatabase
  ) { 
    this.reportForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.reportService.GetReportsList();
    this.createForm();
  }

  createForm(): void {
    this.reportForm = this.fb.group({
      category: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      fullname: ['', Validators.required],
      dateofb: ['', Validators.required],
      location: ['', Validators.required],
      gender: ['', Validators.required],
      casedescript: ['', Validators.required],
      evidence: [''] // You can add validation for evidence if needed
    });
  }
  create(): void {
    if (this.reportForm.valid) {
      
    this.isLoading = true
    this.isNorm = false
      this.reportService.addBo(this.reportForm.value).then(() => {
        
        setTimeout(() => {
          this.isLoading = false; // Hide loading screen
          this.isNorm = true
          this.router.navigate(['/']); // Navigate after a slight delay
        }, 3000); // Adjust delay as needed
      }); 
    } else {
      
      console.log('Form is invalid, please fill in all required fields.');
      alert("Fill all Parameters")
    }
  }
  
  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    const selectedFile = fileInput.files?.[0];

    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      this.selectedFileName = selectedFile.name.substring(0, 8);
    } else {
      this.selectedFileName = undefined;
    }
  }
}
