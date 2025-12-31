import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
