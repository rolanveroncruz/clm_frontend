import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsTable } from './certs-table';

describe('CertsTable', () => {
  let component: CertsTable;
  let fixture: ComponentFixture<CertsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
