import { Injectable } from '@angular/core';
import { PlayerBoard } from './PlayerBoard';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerBoardService {

  private playerBoardUrl = 'http://localhost:8080/tm-player-board/webapi/playerboards';

  constructor(private http: HttpClient) { }

  getNewPlayerBoard(): Observable<PlayerBoard> {
    return this.http.get<PlayerBoard>(this.playerBoardUrl)
  }
}
