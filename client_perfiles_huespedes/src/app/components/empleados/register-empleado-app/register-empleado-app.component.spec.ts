import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmpleadoAppComponent } from './register-empleado-app.component';

describe('RegisterEmpleadoAppComponent', () => {
  let component: RegisterEmpleadoAppComponent;
  let fixture: ComponentFixture<RegisterEmpleadoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEmpleadoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmpleadoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
