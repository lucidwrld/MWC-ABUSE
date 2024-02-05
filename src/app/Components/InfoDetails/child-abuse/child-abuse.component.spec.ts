import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAbuseComponent } from './child-abuse.component';

describe('ChildAbuseComponent', () => {
  let component: ChildAbuseComponent;
  let fixture: ComponentFixture<ChildAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAbuseComponent]
    });
    fixture = TestBed.createComponent(ChildAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
