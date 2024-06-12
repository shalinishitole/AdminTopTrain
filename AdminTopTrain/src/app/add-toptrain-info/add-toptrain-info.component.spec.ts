import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToptrainInfoComponent } from './add-toptrain-info.component';

describe('AddToptrainInfoComponent', () => {
  let component: AddToptrainInfoComponent;
  let fixture: ComponentFixture<AddToptrainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToptrainInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToptrainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
