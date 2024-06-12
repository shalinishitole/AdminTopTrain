import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignRolesComponent } from './add-assign-roles.component';

describe('AddAssignRolesComponent', () => {
  let component: AddAssignRolesComponent;
  let fixture: ComponentFixture<AddAssignRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssignRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssignRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
