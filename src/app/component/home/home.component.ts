import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  cardList = [
    {'cardTitle': 'Card1 Title', 'cardSubTitle': 'Card1Sub', 'images':'https://i.pinimg.com/originals/9f/c3/e8/9fc3e8a71a5cdebecf5b2dc35f0739e2.jpg', 'cardContent': 'Content for card 1', 'footer': 'footer for card 1'},
    {'cardTitle': 'Card2 Title', 'cardSubTitle': 'Card2 sub title', 'images':"https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/c1.png", 'cardContent': 'Card2 content ', 'footer': 'Card2 footer'},
    {'cardTitle': 'Card3 Title', 'cardSubTitle': 'Card3 sub title', 'images':"https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/c1.png", 'cardContent': 'Card3 content', 'footer': 'card3 footer'},
   {'cardTitle': 'Card4 Title', 'cardSubTitle': 'Card4Sub', 'images':"https://blog.giallozafferano.it/adryincucina/wp-content/uploads/2015/05/Collage-pizza-e1584710778650.jpg", 'cardContent': 'Content for card 4', 'footer': 'footer for card 4'},
    {'cardTitle': 'Card5 Title', 'cardSubTitle': 'Card5 sub title', 'images':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWgsitPP7w-CalNngLHFVFVaQuFUjQCgHSw&usqp=CAU", 'cardContent': 'Card5 content ', 'footer': 'Card5 footer'},
    {'cardTitle': 'Card6 Title', 'cardSubTitle': 'Card6 sub title', 'images':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8XnJH5FU4PB07MgoWN9FmAl3XLRU4qhk0w&usqp=CAU" , 'cardContent': 'Card36content', 'footer': 'card6 footer'}
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
