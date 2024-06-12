import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { UiElementComponent } from './ui-element/ui-element.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TypograpyComponent } from './typograpy/typograpy.component';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { AddMainSkillsComponent } from './add-main-skills/add-main-skills.component';
import { MainSkillsListComponent } from './main-skills-list/main-skills-list.component';
import { AddSubSkillsComponent } from './add-sub-skills/add-sub-skills.component';
import { SubSkillsListComponent } from './sub-skills-list/sub-skills-list.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { AddAssignRolesComponent } from './add-assign-roles/add-assign-roles.component';
import { AssignRolesListComponent } from './assign-roles-list/assign-roles-list.component';
import { AddToptrainInfoComponent } from './add-toptrain-info/add-toptrain-info.component';
import { ToptrainInfoListComponent } from './toptrain-info-list/toptrain-info-list.component';
import { AddToptrainPlanComponent } from './add-toptrain-plan/add-toptrain-plan.component';
import { ToptrainPlanListComponent } from './toptrain-plan-list/toptrain-plan-list.component';
import { AddCareerPathComponent } from './add-career-path/add-career-path.component';
import { CareerPathListComponent } from './career-path-list/career-path-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TravlisInfoListComponent } from './travlis-info-list/travlis-info-list.component';
import { AddTravlisInfoComponent } from './add-travlis-info/add-travlis-info.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FormsComponent,
    UiElementComponent,
    TablesComponent,
    LoginComponent,
    RegistrationComponent,
    ButtonComponent,
    DropdownComponent,
    TypograpyComponent,
    AddIndustryComponent,
    IndustryListComponent,
    AddMainSkillsComponent,
    MainSkillsListComponent,
    AddSubSkillsComponent,
    SubSkillsListComponent,
    AddRolesComponent,
    RolesListComponent,
    AddAssignRolesComponent,
    AssignRolesListComponent,
    AddToptrainInfoComponent,
    ToptrainInfoListComponent,
    AddToptrainPlanComponent,
    ToptrainPlanListComponent,
    AddCareerPathComponent,
    CareerPathListComponent,
    TravlisInfoListComponent,
    AddTravlisInfoComponent,
    AddRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
