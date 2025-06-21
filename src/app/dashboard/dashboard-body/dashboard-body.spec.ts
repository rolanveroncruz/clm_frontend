import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBody } from './dashboard-body';

describe('DashboardBody', () => {
  let component: DashboardBody;
  let fixture: ComponentFixture<DashboardBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
