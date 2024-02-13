import { Injectable } from '@angular/core';
import { Report } from './report';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private db: AngularFireDatabase) {}
  GetReport(id: string): AngularFireObject<any> {
    return this.db.object('report/' + id);
  }

  // Method to get a list of reports
  GetReportsList(): AngularFireList<any> {
    return this.db.list('report');
  }

  // Method to get a reference to a specific list
  getRef(): AngularFireList<any> {
    return this.db.list("report");
  }


  private getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString();
    let day = now.getDate().toString();

    if (month.length === 1) {
      month = '0' + month; // prepend '0' if month is single digit
    }

    if (day.length === 1) {
      day = '0' + day; // prepend '0' if day is single digit
    }

    return `${year}-${month}-${day}`;
  }

  // Method to add a new report
  addBo(report: Report) {
    const currentDate = this.getCurrentDate();
    return this.db.list("report").push({
      date: currentDate,
      category: report.category,
      email: report.email,
      phone: report.phone,
      fullname: report.fullname,
      dateofb: report.dateofb,
      location: report.location,
      gender: report.gender,
      casedescript: report.casedescript,
      evidence: report.evidence
    });
  }

}
