import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSkillsListComponent } from './main-skills-list.component';

describe('MainSkillsListComponent', () => {
  let component: MainSkillsListComponent;
  let fixture: ComponentFixture<MainSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSkillsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
