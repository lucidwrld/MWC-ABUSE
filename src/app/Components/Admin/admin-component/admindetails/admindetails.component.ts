import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/report/report.service';
import { Report } from 'src/app/report/report';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.scss', './admin-details-mobile.component.scss']
})
export class AdmindetailsComponent implements OnInit {
  report!: Report ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService
  ) {
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reportService
        .GetReport(id)
        .valueChanges()
        .subscribe((data: Report) => {
          this.report = data;
        });
    }
  }
  
  navigateToCasePage() {
    this.router.navigate(['/admincomponent/admincases']);
  }
}
