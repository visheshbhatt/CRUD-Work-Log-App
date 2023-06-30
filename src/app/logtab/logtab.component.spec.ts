import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtabComponent } from './logtab.component';

describe('LogtabComponent', () => {
  let component: LogtabComponent;
  let fixture: ComponentFixture<LogtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogtabComponent]
    });
    fixture = TestBed.createComponent(LogtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
