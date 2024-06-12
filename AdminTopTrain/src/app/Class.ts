export class Registration {
    RegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OTPNo: string;
    DefaultRole: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}

export class Login {
    Email: string;
    Password: string;
}
export class UserRole {
    UserRoleId:number
    RegistrationId: number;
    RoleId: number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
}

export class Role {
    RoleId:number
    Title: string;
    Description: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
    isSelected: boolean; 
}

export class AdminRegistration {
    AdminRegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    OTPNo: string;
    Status: string
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}
export class Loginc {
    Email: string;
    Password: string;
}

export class Industry {
    IndustryId: number;
    Title: string;
    SubTitle: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class CarrerPath{
    CarrePathId: number;
    industry: Industry
    IndustryId: number;
    DesiredDesignation: string;
    Stage1: string;
    Stage2: string;
    Stage3: string;
    Stage4: string;
    Stage5: string;
    Stage6: string;
    Stage7: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
export class MainSkill{
    MainSkillId: number;
    industry: Industry
    IndustryId: number;
    Title: string;
    Description: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class SubSkill{
    SubSkillId: number;
    mainSkill: MainSkill
    MainSkillId: number;
    industry: Industry
    IndustryId: number;
    Title: string;
    Description: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Events{
    EventsId: number;
    registration: Registration
    RegistrationId: number;
    Title: string;
    subTile: string;
    Image: string;
    Time: string;
    Description: string;
    Host: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    





export class WorkExperience{
    WorkExperienceId: number;
    registration: Registration
    RegistrationId: number;
    EmploymentType: string;
    JobTitle: string;
    Company: string;
    StartDate: string;
    EndDate: string;
    Description: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Achievement{
    AchievementId: number;
    registration: Registration
    RegistrationId: number;
    Title: string;
    Year: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class UserDetail{
    UserDetailId: number;
    ProfileHeading: string;
    CarrerObjective: string;
    Email: string;
    Contact: string;
    Location: string;
    Linkedin: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class UserSkill{
    UserSkillId: number;
    industry: Industry
    IndustryId: number;
    mainSkill: MainSkill
    MainSkillId: number;
    subSkill: SubSkill
    SubSkillId: number;
    SkillTitle: string;
    YearOfExperience: string;
    IssuedFrom: string;
    ValidTill: string;
    Certificate: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Courses{
    CoursesId: number;
    registration: Registration
    RegistrationId: number;
    instructor: Instructor
    InstructorId: number;
    industry: Industry
    IndustryId: number;
    mainSkill: MainSkill
    MainSkillId: number;
    subSkill: SubSkill
    SubSkillId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Price: string;
    Duration: string;
    StartDate: string;
    EndDate: string;
    Photo: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    }
    export class Jobs{
    JobId: number;
    company: Company
    CompanyId: number;
    Title: string;
    EmploymentType: string;
    LocationType: string;
    Description: string;
    Requirements: string;
    Location: string;
    Salary: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class CV{
    CVId: number;
    registration: Registration
    RegistrationId: number;
    CVPDF: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class SocialMedia{
    SocialMediaId: number;
    registration: Registration
    RegistrationId: number;
    Facebook: string;
    Instagram: string;
    LinkedIn: string;
    Twitter: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class CourseReview{
    CourseReviewId: number;
    registration: Registration
    RegistrationId: number;
    CourseId: string;
    Rating: string;
    Comment: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Instructor{
    InstructorId: number;
    registration: Registration
    RegistrationId: number;
    Name: string;
    Bio: string;
    Email: string;
    Contact: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Applicant{
    ApplicantId: number;
    registration: Registration
    RegistrationId: number;
    jobs: Jobs
    JobsId: number;
    cV: CV
    CVId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    export class Company{
    CompanyId: number;
    registration: Registration
    RegistrationId: number;
    instructor: Instructor
    IndustryId: number;
    CompanyName: string;
    Contact: string;
    Email: string;
    Logo: string;
    Address: string;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    }
    