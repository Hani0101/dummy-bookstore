import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {HeroComponent} from '../../feature/hero/hero.component';

@Component({
  selector: 'app-shell',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
