import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = [
    {
      image: "https://picsum.photos/200",
      title: "Image",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9m"
    },
    {
      image: "https://picsum.photos/201",
      title: "Image",
      text: "His is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "6m"
    },
    {
      image: "https://picsum.photos/202",
      title: "Image 3",
      text: "Is is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "10m"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
