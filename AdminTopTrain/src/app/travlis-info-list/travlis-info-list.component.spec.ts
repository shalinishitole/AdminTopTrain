import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravlisInfoListComponent } from './travlis-info-list.component';

describe('TravlisInfoListComponent', () => {
  let component: TravlisInfoListComponent;
  let fixture: ComponentFixture<TravlisInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravlisInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravlisInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
