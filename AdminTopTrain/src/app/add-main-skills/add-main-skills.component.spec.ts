import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainSkillsComponent } from './add-main-skills.component';

describe('AddMainSkillsComponent', () => {
  let component: AddMainSkillsComponent;
  let fixture: ComponentFixture<AddMainSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMainSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMainSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
