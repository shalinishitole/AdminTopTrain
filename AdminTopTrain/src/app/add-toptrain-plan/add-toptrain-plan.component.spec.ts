import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToptrainPlanComponent } from './add-toptrain-plan.component';

describe('AddToptrainPlanComponent', () => {
  let component: AddToptrainPlanComponent;
  let fixture: ComponentFixture<AddToptrainPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToptrainPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToptrainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
