import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReservaAppComponent } from './register-reserva-app.component';

describe('RegisterReservaAppComponent', () => {
  let component: RegisterReservaAppComponent;
  let fixture: ComponentFixture<RegisterReservaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReservaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReservaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
