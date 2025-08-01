import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
    imports: [ReactiveFormsModule, MatButtonModule],
    templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    SearchForm = new FormGroup({
        search: new FormControl(''),
    });
    onsearch(){
        alert(this.SearchForm.value);
    }
    ngOnInit() {
        this.toggleTheme()
    }
    isDarkMode = false;

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode;

        if (this.isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
}
