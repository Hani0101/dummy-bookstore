import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShellComponent} from './core/shell/shell.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dummy-book-store';
}
