import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TablesComponent } from './tables/tables.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { AddMainSkillsComponent } from './add-main-skills/add-main-skills.component';
import { MainSkillsListComponent } from './main-skills-list/main-skills-list.component';
import { AddSubSkillsComponent } from './add-sub-skills/add-sub-skills.component';
import { SubSkillsListComponent } from './sub-skills-list/sub-skills-list.component';
import { CareerPathListComponent } from './career-path-list/career-path-list.component';
import { AddCareerPathComponent } from './add-career-path/add-career-path.component';
import { AddAssignRolesComponent } from './add-assign-roles/add-assign-roles.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { AddToptrainInfoComponent } from './add-toptrain-info/add-toptrain-info.component';
import { AddToptrainPlanComponent } from './add-toptrain-plan/add-toptrain-plan.component';
import { AssignRolesListComponent } from './assign-roles-list/assign-roles-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { ToptrainInfoListComponent } from './toptrain-info-list/toptrain-info-list.component';
import { ToptrainPlanListComponent } from './toptrain-plan-list/toptrain-plan-list.component';
import { TravlisInfoListComponent } from './travlis-info-list/travlis-info-list.component';
import { AddTravlisInfoComponent } from './add-travlis-info/add-travlis-info.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Forms', component: FormsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
   { path: 'Tables', component: TablesComponent },
   { path: 'Button', component: ButtonComponent },
   { path: 'Dropdown', component: DropdownComponent },


  //  toptrain Menu sytart
  { path: 'AddIndustry', component: AddIndustryComponent },
  { path: 'IndustryList', component: IndustryListComponent },
  { path: 'AddMainSkills', component: AddMainSkillsComponent },
  { path: 'MainSkillsList', component: MainSkillsListComponent },

  { path: 'AddSubSkills', component: AddSubSkillsComponent },
  { path: 'SubSkillsList', component: SubSkillsListComponent },
  { path: 'AddRoles', component: AddRolesComponent },
  { path: 'RolesList', component: RolesListComponent },
  { path: 'AddAssignRoles', component: AddAssignRolesComponent },
  { path: 'AssignRolesList', component: AssignRolesListComponent },
  { path: 'AddToptrainInfo', component: AddToptrainInfoComponent },
  { path: 'ToptrainInfoList', component: ToptrainInfoListComponent },
  { path: 'AddToptrainPlan', component: AddToptrainPlanComponent },
  { path: 'ToptrainPlanList', component: ToptrainPlanListComponent },
  { path: 'AddCareerPath', component: AddCareerPathComponent },
  { path: 'CareerPathList', component: CareerPathListComponent },
  { path: 'TravlisInfoList', component: TravlisInfoListComponent},
  {path: 'AddTravlisInfo', component: AddTravlisInfoComponent},
  {path: 'AddRegistation', component: AddRegistrationComponent},
  



  
  { path: '',   redirectTo: '/Dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
