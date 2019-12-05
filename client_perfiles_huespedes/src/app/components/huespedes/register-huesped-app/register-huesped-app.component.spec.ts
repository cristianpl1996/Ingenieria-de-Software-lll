import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHuespedAppComponent } from './register-huesped-app.component';

describe('RegisterHuespedAppComponent', () => {
  let component: RegisterHuespedAppComponent;
  let fixture: ComponentFixture<RegisterHuespedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHuespedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHuespedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
