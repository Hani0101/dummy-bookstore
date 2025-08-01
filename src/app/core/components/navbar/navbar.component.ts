import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-navbar',
    imports: [ReactiveFormsModule],
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
}
