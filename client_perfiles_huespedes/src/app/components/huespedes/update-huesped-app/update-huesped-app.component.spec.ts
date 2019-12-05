import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHuespedAppComponent } from './update-huesped-app.component';

describe('UpdateHuespedAppComponent', () => {
  let component: UpdateHuespedAppComponent;
  let fixture: ComponentFixture<UpdateHuespedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHuespedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHuespedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
