import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedesComponent } from './huespedes.component';

describe('HuespedesComponent', () => {
  let component: HuespedesComponent;
  let fixture: ComponentFixture<HuespedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuespedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuespedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
