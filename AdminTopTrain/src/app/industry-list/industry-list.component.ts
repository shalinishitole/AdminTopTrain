import { Component } from '@angular/core';
import { DashboardService } from '../DashboardService';
import { WebService } from '../Service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industry-list',
  templateUrl: './industry-list.component.html',
  styleUrls: ['./industry-list.component.scss']
})
export class IndustryListComponent {

  industryList:any[]
  
  constructor(private router: Router,  private http: HttpClient, private service: WebService, private dashboardService: DashboardService) {
    this.industryList=[];
   }

   Delete(IndustryId) {
      let confirmAction = confirm("Are you sure you want to delete?");
      if (confirmAction) {
        this.service.DeleteIndustry(IndustryId).subscribe(result => {
          if (result == "Success") {
            this.industryList = this.industryList.filter(
              (item) => item.IndustryId != IndustryId);
            alert("Deleted Successfully");
            this.GetAllIndustry();
          }
        });
  
      } else {
        alert("Action canceled");
      }
  }
  Edit(IndustryId): void{
    try {
      this.router.navigateByUrl("/UpdateIndustry/" + IndustryId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(IndustryId): void{
    try {
      this.router.navigateByUrl("/ViewDestinations/" + IndustryId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  GetAllIndustry(){
    this.service.GetAllIndustry().subscribe((result) => {
      this.industryList=[]
      console.log(result);
      for(let data of result)
      {
          this.industryList.push(data);   
      }     
           console.log(this.industryList);
    });
  }
  ngOnInit(): void {
  this.GetAllIndustry()
  this.dashboardService.initDashboardFeatures();
  }

}