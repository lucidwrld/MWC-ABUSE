import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualAbuseComponent } from './sexual-abuse.component';

describe('SexualAbuseComponent', () => {
  let component: SexualAbuseComponent;
  let fixture: ComponentFixture<SexualAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SexualAbuseComponent]
    });
    fixture = TestBed.createComponent(SexualAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
