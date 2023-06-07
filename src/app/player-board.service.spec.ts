import { TestBed } from '@angular/core/testing';

import { PlayerBoardService } from './player-board.service';

describe('PlayerBoardService', () => {
  let service: PlayerBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
