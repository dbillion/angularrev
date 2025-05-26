import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
handleClick() {
// this. clicked = !this.clicked;
this. clicked = true;
}
clicked = false;
title =`Angular ${VERSION.full} is rad!`;
  constructor() { }

  home = {
    name: 'Welcome to Wedey Leary Line Code',
    year: 2025,
    img: 'assets/sweet.jpg'
  }

  boats = [
    {
    name: 'Titanic',
    year: 2025,
    img: 'assets/Titanic.jpg'
  }
,{
    name: 'Queen Mary',
    year: 2021,
    img: 'assets/fishing-boat.jpg'
  },
{
    name: 'USS Enterprise',
    year: 2022,
    img: 'assets/luxfishing-boat.jpg'
  }
,{
    name: 'USS Nautilus',
    year: 2023,
    img: 'assets/sailing-with-sailboat.jpg'
  }
  ,{
    name: 'action king 4',
    year: 2024,
    img: 'assets/asherboat.jpg'
  }

  ]
}
