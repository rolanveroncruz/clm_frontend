import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bigpic } from './bigpic';

describe('Bigpic', () => {
  let component: Bigpic;
  let fixture: ComponentFixture<Bigpic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bigpic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bigpic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
