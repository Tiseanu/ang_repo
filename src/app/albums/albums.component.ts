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
      title: "Title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9m"
    },
    {
      image: "https://picsum.photos/201",
      title: "Title",
      text: "His is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "6m"
    },
    {
      image: "https://picsum.photos/202",
      title: "Title",
      text: "Is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "10m"
    },
    {
      image: "https://picsum.photos/204",
      title: "Title",
      text: "A wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "7m"
    },
    {
      image: "https://picsum.photos/205",
      title: "Title",
      text: "Wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "6m"
    },
    {
      image: "https://picsum.photos/206",
      title: "Title",
      text: "Card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "15m"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
