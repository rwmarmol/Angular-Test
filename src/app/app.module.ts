// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { CharactersComponent } from './components/characters/characters.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

// Pipes
import { FilterPipe } from './pipes/filter/filter.pipe';

// ngx-moment
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    NotfoundComponent,
    CharacterDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
