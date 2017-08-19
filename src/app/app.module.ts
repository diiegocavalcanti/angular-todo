import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HistoriaComponent } from './historia/historia.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'home', component: TasksComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SobreComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
