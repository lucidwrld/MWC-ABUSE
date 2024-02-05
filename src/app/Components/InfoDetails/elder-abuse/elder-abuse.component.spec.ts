import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderAbuseComponent } from './elder-abuse.component';

describe('ElderAbuseComponent', () => {
  let component: ElderAbuseComponent;
  let fixture: ComponentFixture<ElderAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElderAbuseComponent]
    });
    fixture = TestBed.createComponent(ElderAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
