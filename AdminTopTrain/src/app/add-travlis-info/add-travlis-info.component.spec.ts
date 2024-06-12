import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravlisInfoComponent } from './add-travlis-info.component';

describe('AddTravlisInfoComponent', () => {
  let component: AddTravlisInfoComponent;
  let fixture: ComponentFixture<AddTravlisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravlisInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTravlisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
