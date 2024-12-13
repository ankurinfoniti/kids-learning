import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lists = [
    'Learn Capital Letter',
    'Learn Small Letter',
    'Learn Words',
    'Learn Vowels',
    'Learn Consonants',
    'Learn Numbers',
  ];
}
