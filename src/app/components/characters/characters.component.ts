import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = [];
  filterCharacters = '';

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters()
      .subscribe(
        (data) => {
          this.characters = data.characters;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
