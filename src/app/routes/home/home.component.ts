import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lists = [
    { title: 'Learn Capital Letter', type: 'capital' },
    { title: 'Learn Small Letter', type: 'small' },
    { title: 'Learn Words', type: 'words' },
    { title: 'Learn Vowels', type: 'vowels' },
    { title: 'Learn Consonants', type: 'consonants' },
    { title: 'Learn Numbers', type: 'numbers' },
  ];
}
