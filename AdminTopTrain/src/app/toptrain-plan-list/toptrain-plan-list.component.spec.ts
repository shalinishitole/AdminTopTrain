import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptrainPlanListComponent } from './toptrain-plan-list.component';

describe('ToptrainPlanListComponent', () => {
  let component: ToptrainPlanListComponent;
  let fixture: ComponentFixture<ToptrainPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptrainPlanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToptrainPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
