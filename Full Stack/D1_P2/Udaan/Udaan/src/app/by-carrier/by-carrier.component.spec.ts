import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCarrierComponent } from './by-carrier.component';

describe('ByCarrierComponent', () => {
  let component: ByCarrierComponent;
  let fixture: ComponentFixture<ByCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
