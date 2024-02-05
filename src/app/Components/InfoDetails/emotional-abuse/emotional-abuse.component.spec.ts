import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalAbuseComponent } from './emotional-abuse.component';

describe('EmotionalAbuseComponent', () => {
  let component: EmotionalAbuseComponent;
  let fixture: ComponentFixture<EmotionalAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionalAbuseComponent]
    });
    fixture = TestBed.createComponent(EmotionalAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
