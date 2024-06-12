import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptrainInfoListComponent } from './toptrain-info-list.component';

describe('ToptrainInfoListComponent', () => {
  let component: ToptrainInfoListComponent;
  let fixture: ComponentFixture<ToptrainInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptrainInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToptrainInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
