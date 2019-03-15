import { Component, OnInit } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  items:Array<any> = [];
  constructor() { 

    this.items = [
      {
        message: 'Have the courage to follow your heart and intuition. They somehow know what you trully want to become',
        name: 'Steve Jobs',
        position: 'Apple'
      },
      {
        message: 'Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity',
        name: 'Albert Einstein',
        position: 'Scientist'
      },
      {
        message: "It always seems impossible until it's done",
        name: 'Nelson Mandela',
        position: 'Politician'
      },
      {
      }

    ];
  }

  ngOnInit() {
  }

}
