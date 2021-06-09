import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCodeComponent } from './by-code.component';

describe('ByCodeComponent', () => {
  let component: ByCodeComponent;
  let fixture: ComponentFixture<ByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
