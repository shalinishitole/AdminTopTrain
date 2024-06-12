import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRolesListComponent } from './assign-roles-list.component';

describe('AssignRolesListComponent', () => {
  let component: AssignRolesListComponent;
  let fixture: ComponentFixture<AssignRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRolesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
