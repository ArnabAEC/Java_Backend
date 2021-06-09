import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRouteComponent } from './by-route.component';

describe('ByRouteComponent', () => {
  let component: ByRouteComponent;
  let fixture: ComponentFixture<ByRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
