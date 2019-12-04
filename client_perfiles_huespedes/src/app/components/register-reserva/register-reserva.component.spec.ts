import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReservaComponent } from './register-reserva.component';

describe('RegisterReservaComponent', () => {
  let component: RegisterReservaComponent;
  let fixture: ComponentFixture<RegisterReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
