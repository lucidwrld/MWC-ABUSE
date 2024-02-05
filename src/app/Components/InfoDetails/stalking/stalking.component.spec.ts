import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkingComponent } from './stalking.component';

describe('StalkingComponent', () => {
  let component: StalkingComponent;
  let fixture: ComponentFixture<StalkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StalkingComponent]
    });
    fixture = TestBed.createComponent(StalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
