import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverService} from '../../services/cover/cover.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
    bookIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    constructor(private bookCoverService: CoverService) {}

    getSrcSet(id: number): string {
        return `
      ${this.bookCoverService.getSmallCover(id)} 100w,
      ${this.bookCoverService.getMediumCover(id)} 500w,
      ${this.bookCoverService.getLargeCover(id)} 700w
    `;
    }

    getDefaultSrc(id: number): string {
        return this.bookCoverService.getLargeCover(id);
    }
}
