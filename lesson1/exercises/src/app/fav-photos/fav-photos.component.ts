import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fantastic Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjaXAqNFsDBr2OUkYFD_0mGRGRqFuUIv0qA&usqp=CAU';
  image3 = 'https://cdn.britannica.com/s:800x450,c:crop/66/195966-138-F9E7A828/facts-turtles.jpg';

  constructor() { }

  ngOnInit() {
  }

}