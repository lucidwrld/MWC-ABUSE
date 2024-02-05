import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalAbuseComponent } from './verbal-abuse.component';

describe('VerbalAbuseComponent', () => {
  let component: VerbalAbuseComponent;
  let fixture: ComponentFixture<VerbalAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerbalAbuseComponent]
    });
    fixture = TestBed.createComponent(VerbalAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
