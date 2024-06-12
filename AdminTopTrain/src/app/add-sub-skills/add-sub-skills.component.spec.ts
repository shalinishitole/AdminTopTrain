import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubSkillsComponent } from './add-sub-skills.component';

describe('AddSubSkillsComponent', () => {
  let component: AddSubSkillsComponent;
  let fixture: ComponentFixture<AddSubSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
