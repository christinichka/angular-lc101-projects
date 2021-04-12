import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate', 'Oceans 8', 'Star Wars: Phantom Menace', 'Indiana Jones: Raiders of the Lost Ark'];

   constructor() { }

   ngOnInit() {
   }

}
