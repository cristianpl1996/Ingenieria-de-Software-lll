import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservaAppComponent } from './update-reserva-app.component';

describe('UpdateReservaAppComponent', () => {
  let component: UpdateReservaAppComponent;
  let fixture: ComponentFixture<UpdateReservaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReservaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
