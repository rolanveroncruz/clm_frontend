import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyfeatures } from './keyfeatures';

describe('Keyfeatures', () => {
  let component: Keyfeatures;
  let fixture: ComponentFixture<Keyfeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyfeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyfeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
