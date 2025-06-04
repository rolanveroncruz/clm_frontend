import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBody } from './login-body';

describe('LoginBody', () => {
  let component: LoginBody;
  let fixture: ComponentFixture<LoginBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
