import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public characterID: number;
  public characters = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.characterID = parseInt( id , 0 );
    this.getCharacter();
  }

  getCharacter() {
    this.characterService.getCharacters().subscribe(
      (data) => {
        for (const i of data.characters) {
          if (i.id === this.characterID) {
            this.characters.push(i);
          }
        }
      }
    );
  }

}
