import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks = ['https://en.boardgamearena.com/', 'https://dominion.games/', 'https://www.launchcode.org/'];
  constructor() { }

  ngOnInit() {
  }

}
