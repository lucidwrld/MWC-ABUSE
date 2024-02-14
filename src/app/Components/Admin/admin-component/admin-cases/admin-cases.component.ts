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
  searchText: string = '';
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  
  searchDate: string = '';

  
  isCalendarVisible: boolean = false;
  selectedDate: string = '';
  constructor(public toastr: ToastrService, public reportService: ReportService) {}

  ngOnInit(): void {
    this.dataState();
    let s = this.reportService.GetReportsList();
    s.snapshotChanges().subscribe(data => {
      this.Report = [];
      data.forEach(item => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Report.push(a as Report);
      })
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
  get filteredCases() {
    let filtered = this.Report;
    if (this.searchText) {
      filtered = this.filterBySearchText(filtered);
    }
    else if(this.searchDate){
      filtered = this.filterBySearchDate(filtered)
      
    }
    return filtered;
  }

  filterBySearchText(cases: Report[]) {
    return cases.filter(report =>
      report.fullname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openDatePicker() {
    this.isCalendarVisible = true;
  }
  filterBySearchDate(cases: Report[]) {
    return cases.filter(report =>
      report.date === this.searchDate,
      console.log(this.searchDate)
    );
  }
  
  selectDate() {
    this.isCalendarVisible = false;
}
  
}
