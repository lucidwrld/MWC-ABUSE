import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/report/report.service';
import { Report } from 'src/app/report/report';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-cases',
  templateUrl: './admin-cases.component.html',
  styleUrls: ['./admin-cases.component.scss']
})
export class AdminCasesComponent {
  p: number = 1;
  Report: Report[] = [];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  constructor(public toastr: ToastrService, public reportService: ReportService) {
    
  }
  ngOnInit(): void {
    this.dataState();
    let s = this.reportService.GetReportsList();
    console.log(s)
    s.snapshotChanges().subscribe(data => {
      this.Report = [];
      console.log(this.Report)
      data.forEach(item => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Report.push(a as Report);
        console.log(a)
      })
      console.log(data)
    })
  }

  dataState() {
    this.reportService.GetReportsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

}
