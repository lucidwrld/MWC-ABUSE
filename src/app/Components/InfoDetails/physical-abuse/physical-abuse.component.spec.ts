import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAbuseComponent } from './physical-abuse.component';

describe('PhysicalAbuseComponent', () => {
  let component: PhysicalAbuseComponent;
  let fixture: ComponentFixture<PhysicalAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalAbuseComponent]
    });
    fixture = TestBed.createComponent(PhysicalAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
