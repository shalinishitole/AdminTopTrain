import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../DashboardService';
import { CarrerPath, Industry } from '../Class';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';


@Component({
  selector: 'app-add-career-path',
  templateUrl: './add-career-path.component.html',
  styleUrls: ['./add-career-path.component.scss']
})
export class AddCareerPathComponent {

  carrerPath: CarrerPath
  industry: Industry

  industrylist: any[] = []

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
    private service: WebService, private dashboardService: DashboardService) {
    this.carrerPath = new CarrerPath();
    this.carrerPath.industry = new Industry();
    this.GetAllIndustry();
  }

  OnSubmit() {
    console.log("prop", this.carrerPath);
    // this.carrerPath.industry.IndustryId = 1
    this.service.AddCarrerPath(this.carrerPath).subscribe((result) => {
      if (result > 0) {


        alert('Saved Successfully.');

      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }

  GetAllIndustry() {
    this.service.GetAllIndustry().subscribe((result) => {
      console.log(result);
      for (let data of result) {
        this.industrylist.push(data);
      }
      console.log("GetAllIndustry", this.industrylist);
    });
  }


  ngOnInit(): void {
    this.dashboardService.initDashboardFeatures();
  }

}
