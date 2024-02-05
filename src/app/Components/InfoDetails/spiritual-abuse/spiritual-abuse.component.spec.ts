import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualAbuseComponent } from './spiritual-abuse.component';

describe('SpiritualAbuseComponent', () => {
  let component: SpiritualAbuseComponent;
  let fixture: ComponentFixture<SpiritualAbuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritualAbuseComponent]
    });
    fixture = TestBed.createComponent(SpiritualAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
