import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHuespedComponent } from './register-huesped.component';

describe('RegisterHuespedComponent', () => {
  let component: RegisterHuespedComponent;
  let fixture: ComponentFixture<RegisterHuespedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHuespedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
