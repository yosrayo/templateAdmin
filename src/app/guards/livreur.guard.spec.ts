import { TestBed, async, inject } from '@angular/core/testing';

import { LivreurGuard } from './livreur.guard';

describe('LivreurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivreurGuard]
    });
  });

  it('should ...', inject([LivreurGuard], (guard: LivreurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
