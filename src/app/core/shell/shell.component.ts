import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-shell',
  imports: [NavbarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
