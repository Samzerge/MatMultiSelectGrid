import { TestBed } from '@angular/core/testing';

import { MatMultiSelectGridService } from './mat-multi-select-grid.service';

describe('MatMultiSelectGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatMultiSelectGridService = TestBed.get(MatMultiSelectGridService);
    expect(service).toBeTruthy();
  });
});
