import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPathListComponent } from './career-path-list.component';

describe('CareerPathListComponent', () => {
  let component: CareerPathListComponent;
  let fixture: ComponentFixture<CareerPathListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPathListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
