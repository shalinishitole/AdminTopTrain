import { Component, OnInit } from        '@angular/core';
import { Injectable } from        '@angular/core';
import { HttpRequest, HttpClient } from        '@angular/common/http';
import { Observable} from        'rxjs';
import { HttpHeaders } from        '@angular/common/http';
import { WorkExperience,Achievement,UserDetail,UserSkill,Courses,Jobs,CV,SocialMedia,CourseReview,Instructor,Applicant,Company, Industry, Login, Registration, UserRole, CarrerPath } from        './Class';
//add name of class here
import { GlobalVariable } from        './Global';
@Injectable({
providedIn:        'root'
})

export class WebService {
httpOptions = {
 headers: new HttpHeaders({
        'Content-Type':  'application/json',
 "Access-Control-Allow-Headers": "Content-Type",
 "Access-Control-Allow-Methods":        'GET, POST, OPTIONS, DELETE,PUT',
 "Content-Security-Policy":        'upgrade-insecure-requests' 
  })
};
constructor (private http: HttpClient){  }




  
Login(Email, Password): Observable<any> {
    return this.http.get<Login>(GlobalVariable.SERVICE_API_URL + "Registration/Login?Email=" + Email + "&Password=" + Password);
}

//Registration
AddRegistration(Registration): Observable<any> {
    return this.http.post<Registration>(GlobalVariable.SERVICE_API_URL + "Registration/AddRegistration", Registration, this.httpOptions);
}
GetAllRegistration() {
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Registration/GetAllRegistration", this.httpOptions);
}
GetRegistrationByEmail(Email){
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationByEmail?Email="+Email,this.httpOptions);
  }

  SendOTPEmail(Email){
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL +"Registration/SendOTPEmail?Email="+Email,this.httpOptions);
  }

  DeleteRegistration(RegistrationId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Registration/DeleteRegistration?RegistrationId="+RegistrationId,this.httpOptions);
  }
  GetRegistrationById(RegistrationId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?RegistrationId=" +RegistrationId, this.httpOptions);
  }
  UpdateRegistration(Registration): Observable<any> {
    return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration",Registration, this.httpOptions);
  } 


//UserRole
AddUserRole(UserRole): Observable<any> {
return this.http.post<UserRole>(GlobalVariable.SERVICE_API_URL + "UserRole/AddUserRole", UserRole, this.httpOptions);
}
GetAllUserRole() {
return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "UserRole/GetAllUserRole", this.httpOptions);
}

DeleteUserRole(UserRoleId): Observable<any> {
return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserRole/DeleteUserRole?UserRoleId="+UserRoleId,this.httpOptions);
}
GetUserRoleById(UserRoleId): Observable<any> {
return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserRole/GetUserRoleById?UserRoleId="+UserRoleId, this.httpOptions);
}
UpdateUserRole(UserRole): Observable<any> {
return this.http.post<UserRole>( GlobalVariable.SERVICE_API_URL +"UserRole/UpdateUserRole",UserRole, this.httpOptions);
} 

//Role
GetAllRole() {
return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Role/GetAllRole", this.httpOptions);
}



AddIndustry(Industry): Observable<any> {
    return this.http.post<Industry>( GlobalVariable.SERVICE_API_URL +"Industry/AddIndustry",Industry, this.httpOptions);
  } 
  
  GetAllIndustry(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Industry/GetAllIndustry" , this.httpOptions);
  } 
  DeleteIndustry(IndustryId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Industry/DeleteIndustry?IndustryId="+IndustryId,this.httpOptions);
  }
  GetIndustryById(IndustryId:any): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Industry/GetIndustryById?IndustryId="+IndustryId,this.httpOptions);
  } 
  UpdateIndustry(Industry): Observable<any> {
    return this.http.post<Industry>( GlobalVariable.SERVICE_API_URL +"Industry/UpdateIndustry" , Industry,this.httpOptions);
  }


//CarrerPath
AddCarrerPath(CarrerPath): Observable<any> {
    return this.http.post<CarrerPath>( GlobalVariable.SERVICE_API_URL +"CarrerPath/AddCarrerPath",CarrerPath, this.httpOptions);
  } 
  

//WorkExperience
AddWorkExperience(WorkExperience): Observable<any> {
 return this.http.post<WorkExperience>( GlobalVariable.SERVICE_API_URL +"WorkExperience/AddWorkExperience",WorkExperience, this.httpOptions);
}
GetAllWorkExperience()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"WorkExperience/GetAllWorkExperience", this.httpOptions);
}
DeleteWorkExperience(WorkExperienceId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"WorkExperience/DeleteWorkExperience?WorkExperienceId="+WorkExperienceId, this.httpOptions);
}
GetWorkExperienceById(WorkExperienceId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"WorkExperience/GetWorkExperienceById?WorkExperienceId="+WorkExperienceId, this.httpOptions);
}
UpdateWorkExperience(WorkExperience): Observable<any> {
 return this.http.post<WorkExperience>( GlobalVariable.SERVICE_API_URL +"WorkExperience/UpdateWorkExperience",WorkExperience, this.httpOptions);
}
SaveWorkExperienceImage(formdata,WorkExperienceId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"WorkExperience/SaveWorkExperienceImage?WorkExperienceId="+WorkExperienceId, formdata, null );
return this.http.request(uploadReq);
}
//Achievement
AddAchievement(Achievement): Observable<any> {
 return this.http.post<Achievement>( GlobalVariable.SERVICE_API_URL +"Achievement/AddAchievement",Achievement, this.httpOptions);
}
GetAllAchievement()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Achievement/GetAllAchievement", this.httpOptions);
}
DeleteAchievement(AchievementId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Achievement/DeleteAchievement?AchievementId="+AchievementId, this.httpOptions);
}
GetAchievementById(AchievementId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Achievement/GetAchievementById?AchievementId="+AchievementId, this.httpOptions);
}
UpdateAchievement(Achievement): Observable<any> {
 return this.http.post<Achievement>( GlobalVariable.SERVICE_API_URL +"Achievement/UpdateAchievement",Achievement, this.httpOptions);
}
SaveAchievementImage(formdata,AchievementId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Achievement/SaveAchievementImage?AchievementId="+AchievementId, formdata, null );
return this.http.request(uploadReq);
}
//UserDetail
AddUserDetail(UserDetail): Observable<any> {
 return this.http.post<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/AddUserDetail",UserDetail, this.httpOptions);
}
GetAllUserDetail()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetAllUserDetail", this.httpOptions);
}
DeleteUserDetail(UserDetailId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/DeleteUserDetail?UserDetailId="+UserDetailId, this.httpOptions);
}
GetUserDetailById(UserDetailId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetUserDetailById?UserDetailId="+UserDetailId, this.httpOptions);
}
UpdateUserDetail(UserDetail): Observable<any> {
 return this.http.post<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/UpdateUserDetail",UserDetail, this.httpOptions);
}
SaveUserDetailImage(formdata,UserDetailId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserDetail/SaveUserDetailImage?UserDetailId="+UserDetailId, formdata, null );
return this.http.request(uploadReq);
}
//UserSkill
AddUserSkill(UserSkill): Observable<any> {
 return this.http.post<UserSkill>( GlobalVariable.SERVICE_API_URL +"UserSkill/AddUserSkill",UserSkill, this.httpOptions);
}
GetAllUserSkill()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserSkill/GetAllUserSkill", this.httpOptions);
}
DeleteUserSkill(UserSkillId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserSkill/DeleteUserSkill?UserSkillId="+UserSkillId, this.httpOptions);
}
GetUserSkillById(UserSkillId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserSkill/GetUserSkillById?UserSkillId="+UserSkillId, this.httpOptions);
}
UpdateUserSkill(UserSkill): Observable<any> {
 return this.http.post<UserSkill>( GlobalVariable.SERVICE_API_URL +"UserSkill/UpdateUserSkill",UserSkill, this.httpOptions);
}
SaveUserSkillImage(formdata,UserSkillId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserSkill/SaveUserSkillImage?UserSkillId="+UserSkillId, formdata, null );
return this.http.request(uploadReq);
}
//Courses
AddCourses(Courses): Observable<any> {
 return this.http.post<Courses>( GlobalVariable.SERVICE_API_URL +"Courses/AddCourses",Courses, this.httpOptions);
}
GetAllCourses()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Courses/GetAllCourses", this.httpOptions);
}
DeleteCourses(CoursesId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Courses/DeleteCourses?CoursesId="+CoursesId, this.httpOptions);
}
GetCoursesById(CoursesId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Courses/GetCoursesById?CoursesId="+CoursesId, this.httpOptions);
}
UpdateCourses(Courses): Observable<any> {
 return this.http.post<Courses>( GlobalVariable.SERVICE_API_URL +"Courses/UpdateCourses",Courses, this.httpOptions);
}
SaveCoursesImage(formdata,CoursesId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Courses/SaveCoursesImage?CoursesId="+CoursesId, formdata, null );
return this.http.request(uploadReq);
}
//Jobs
AddJobs(Jobs): Observable<any> {
 return this.http.post<Jobs>( GlobalVariable.SERVICE_API_URL +"Jobs/AddJobs",Jobs, this.httpOptions);
}
GetAllJobs()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Jobs/GetAllJobs", this.httpOptions);
}
DeleteJobs(JobId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Jobs/DeleteJobs?JobId="+JobId, this.httpOptions);
}
GetJobsById(JobId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Jobs/GetJobsById?JobId="+JobId, this.httpOptions);
}
UpdateJobs(Jobs): Observable<any> {
 return this.http.post<Jobs>( GlobalVariable.SERVICE_API_URL +"Jobs/UpdateJobs",Jobs, this.httpOptions);
}
SaveJobsImage(formdata,JobId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Jobs/SaveJobsImage?JobId="+JobId, formdata, null );
return this.http.request(uploadReq);
}
//CV
AddCV(CV): Observable<any> {
 return this.http.post<CV>( GlobalVariable.SERVICE_API_URL +"CV/AddCV",CV, this.httpOptions);
}
GetAllCV()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CV/GetAllCV", this.httpOptions);
}
DeleteCV(CVId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"CV/DeleteCV?CVId="+CVId, this.httpOptions);
}
GetCVById(CVId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CV/GetCVById?CVId="+CVId, this.httpOptions);
}
UpdateCV(CV): Observable<any> {
 return this.http.post<CV>( GlobalVariable.SERVICE_API_URL +"CV/UpdateCV",CV, this.httpOptions);
}
SaveCVImage(formdata,CVId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"CV/SaveCVImage?CVId="+CVId, formdata, null );
return this.http.request(uploadReq);
}
//SocialMedia
AddSocialMedia(SocialMedia): Observable<any> {
 return this.http.post<SocialMedia>( GlobalVariable.SERVICE_API_URL +"SocialMedia/AddSocialMedia",SocialMedia, this.httpOptions);
}
GetAllSocialMedia()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"SocialMedia/GetAllSocialMedia", this.httpOptions);
}
DeleteSocialMedia(SocialMediaId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"SocialMedia/DeleteSocialMedia?SocialMediaId="+SocialMediaId, this.httpOptions);
}
GetSocialMediaById(SocialMediaId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"SocialMedia/GetSocialMediaById?SocialMediaId="+SocialMediaId, this.httpOptions);
}
UpdateSocialMedia(SocialMedia): Observable<any> {
 return this.http.post<SocialMedia>( GlobalVariable.SERVICE_API_URL +"SocialMedia/UpdateSocialMedia",SocialMedia, this.httpOptions);
}
SaveSocialMediaImage(formdata,SocialMediaId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"SocialMedia/SaveSocialMediaImage?SocialMediaId="+SocialMediaId, formdata, null );
return this.http.request(uploadReq);
}
//CourseReview
AddCourseReview(CourseReview): Observable<any> {
 return this.http.post<CourseReview>( GlobalVariable.SERVICE_API_URL +"CourseReview/AddCourseReview",CourseReview, this.httpOptions);
}
GetAllCourseReview()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CourseReview/GetAllCourseReview", this.httpOptions);
}
DeleteCourseReview(CourseReviewId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"CourseReview/DeleteCourseReview?CourseReviewId="+CourseReviewId, this.httpOptions);
}
GetCourseReviewById(CourseReviewId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CourseReview/GetCourseReviewById?CourseReviewId="+CourseReviewId, this.httpOptions);
}
UpdateCourseReview(CourseReview): Observable<any> {
 return this.http.post<CourseReview>( GlobalVariable.SERVICE_API_URL +"CourseReview/UpdateCourseReview",CourseReview, this.httpOptions);
}
SaveCourseReviewImage(formdata,CourseReviewId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"CourseReview/SaveCourseReviewImage?CourseReviewId="+CourseReviewId, formdata, null );
return this.http.request(uploadReq);
}
//Instructor
AddInstructor(Instructor): Observable<any> {
 return this.http.post<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/AddInstructor",Instructor, this.httpOptions);
}
GetAllInstructor()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Instructor/GetAllInstructor", this.httpOptions);
}
DeleteInstructor(InstructorId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Instructor/DeleteInstructor?InstructorId="+InstructorId, this.httpOptions);
}
GetInstructorById(InstructorId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Instructor/GetInstructorById?InstructorId="+InstructorId, this.httpOptions);
}
UpdateInstructor(Instructor): Observable<any> {
 return this.http.post<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/UpdateInstructor",Instructor, this.httpOptions);
}
SaveInstructorImage(formdata,InstructorId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Instructor/SaveInstructorImage?InstructorId="+InstructorId, formdata, null );
return this.http.request(uploadReq);
}
//Applicant
AddApplicant(Applicant): Observable<any> {
 return this.http.post<Applicant>( GlobalVariable.SERVICE_API_URL +"Applicant/AddApplicant",Applicant, this.httpOptions);
}
GetAllApplicant()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Applicant/GetAllApplicant", this.httpOptions);
}
DeleteApplicant(ApplicantId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Applicant/DeleteApplicant?ApplicantId="+ApplicantId, this.httpOptions);
}
GetApplicantById(ApplicantId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Applicant/GetApplicantById?ApplicantId="+ApplicantId, this.httpOptions);
}
UpdateApplicant(Applicant): Observable<any> {
 return this.http.post<Applicant>( GlobalVariable.SERVICE_API_URL +"Applicant/UpdateApplicant",Applicant, this.httpOptions);
}
SaveApplicantImage(formdata,ApplicantId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Applicant/SaveApplicantImage?ApplicantId="+ApplicantId, formdata, null );
return this.http.request(uploadReq);
}
//Company
AddCompany(Company): Observable<any> {
 return this.http.post<Company>( GlobalVariable.SERVICE_API_URL +"Company/AddCompany",Company, this.httpOptions);
}
GetAllCompany()  {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Company/GetAllCompany", this.httpOptions);
}
DeleteCompany(CompanyId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Company/DeleteCompany?CompanyId="+CompanyId, this.httpOptions);
}
GetCompanyById(CompanyId): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Company/GetCompanyById?CompanyId="+CompanyId, this.httpOptions);
}
UpdateCompany(Company): Observable<any> {
 return this.http.post<Company>( GlobalVariable.SERVICE_API_URL +"Company/UpdateCompany",Company, this.httpOptions);
}
SaveCompanyImage(formdata,CompanyId): Observable<any> {
const uploadReq = new  HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Company/SaveCompanyImage?CompanyId="+CompanyId, formdata, null );
return this.http.request(uploadReq);
}
}
