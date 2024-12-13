import { Component, computed, input, InputSignal, Signal } from '@angular/core';

import { consonantsData } from '../../../shared/data/consonants.data';
import { letterData } from '../../../shared/data/letters.data';
import { vowelData } from '../../../shared/data/vowels.data';
import { alphabetData } from '../../../shared/data/words.data';
import { numbersData } from '../../../shared/data/numbers.data';
import { Word } from '../../../shared/models/word.model';

@Component({
  selector: 'app-letter',
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
})
export default class LetterComponent {
  public readonly type: InputSignal<string> = input.required();
  public showImage = false;

  protected data: Signal<Word[] | []> = computed(() => {
    const type = this.type();

    this.showImage = false;

    if (type === 'capital') {
      return letterData;
    } else if (type === 'small') {
      return letterData.map((letter) => ({
        color: letter['color'],
        letter: letter['letter'].toLowerCase(),
      })) as Word[];
    } else if (type === 'vowels') {
      return vowelData;
    } else if (type === 'consonants') {
      return consonantsData;
    } else if (type === 'words') {
      this.showImage = true;
      return alphabetData;
    } else if (type === 'numbers') {
      return numbersData;
    }

    return [];
  });

  onLetterClick(item: Word) {
    if (this.type() === 'words') {
      this.speakText(item.word ?? '');
    } else {
      this.speakText(item.letter);
    }
  }

  speakText(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.5; // Slow down the speech rate
    speechSynthesis.speak(utterance);
  }
}
