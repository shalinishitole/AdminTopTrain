import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSkillsListComponent } from './sub-skills-list.component';

describe('SubSkillsListComponent', () => {
  let component: SubSkillsListComponent;
  let fixture: ComponentFixture<SubSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSkillsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
