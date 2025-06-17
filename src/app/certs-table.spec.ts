import { TestBed } from '@angular/core/testing';

import { CertsTable } from './certs-table';

describe('CertsTable', () => {
  let service: CertsTable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertsTable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
