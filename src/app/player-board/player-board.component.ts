import { Component, OnInit } from '@angular/core';
import { PlayerBoardService } from '../player-board.service';
import { PlayerBoard } from '../PlayerBoard';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {

  public playerBoard: PlayerBoard | undefined;

  constructor(private playerBoardService: PlayerBoardService) { }

  ngOnInit(): void {
    this.playerBoardService.getNewPlayerBoard()
      .subscribe(playerBoard => this.playerBoard = playerBoard)
  }
}
