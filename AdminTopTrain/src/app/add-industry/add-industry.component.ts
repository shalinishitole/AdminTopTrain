import { Component } from '@angular/core';
import { Industry } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
import { DashboardService } from '../DashboardService';

@Component({
  selector: 'app-add-industry',
  templateUrl: './add-industry.component.html',
  styleUrls: ['./add-industry.component.scss']
})
export class AddIndustryComponent {

  industry: Industry;

  constructor(private router: Router,
    private http: HttpClient,
    private service: WebService, private dashboardService: DashboardService) {

    this.industry = new Industry();

  }
  onSubmit() {
    console.log("prop", this.industry);
    this.industry.Status="Active"
    this.service.AddIndustry(this.industry).subscribe((result: number) => {
      if (result > 0) {
        alert('Saved Successfully.');
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
    console.log("prop",);

  }


  ngOnInit(): void {
    this.dashboardService.initDashboardFeatures();

  }
}
