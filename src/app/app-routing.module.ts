import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XboxComponent } from './componente/xbox/xbox.component';
import { InicioComponent} from './componente/inicio/inicio.component';
import {Ps5Component} from './componente/ps5/ps5.component';
import { NintendoComponent } from './componente/nintendo/nintendo.component';
import {FooterComponent} from './componente/footer/footer.component';

const routes: Routes = [
  {path:'xbox',component:XboxComponent},
  {path:'inicio',component:InicioComponent},
  {path:'ps5',component:Ps5Component},
  {path:'nintendo',component:NintendoComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
