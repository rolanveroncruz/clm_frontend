import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBody } from './home-body';

describe('HomeBody', () => {
  let component: HomeBody;
  let fixture: ComponentFixture<HomeBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
