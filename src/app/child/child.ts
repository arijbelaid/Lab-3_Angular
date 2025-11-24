import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
@Input() states: any[] = []; 
trackState(index: number, state: string): string {
    return state; // Angular utilise cette valeur pour identifier les éléments
  } // <- ajoute cette ligne
}


