import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleadoAppComponent } from './update-empleado-app.component';

describe('UpdateEmpleadoAppComponent', () => {
  let component: UpdateEmpleadoAppComponent;
  let fixture: ComponentFixture<UpdateEmpleadoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpleadoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpleadoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
