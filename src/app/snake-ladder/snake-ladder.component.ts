import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const resetGame: any;
@Component({
  selector: 'app-snake-ladder',
  templateUrl: './snake-ladder.component.html',
  styleUrls: ['./snake-ladder.component.scss'],
})
export class SnakeLadderComponent implements OnInit ,AfterViewInit{
  constructor() {}
  
  ngOnInit() {}

  ngAfterViewInit(): void {
    resetGame();
  }
}