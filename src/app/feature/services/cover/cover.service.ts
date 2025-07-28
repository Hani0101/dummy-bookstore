import { Injectable } from '@angular/core';
import {environment} from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  constructor() { }
    private readonly baseUrl = environment.openLibraryBaseUrl;

    getSmallCover(id: number): string {
        return `${this.baseUrl}/${id}-S.jpg`;
    }

    getMediumCover(id: number): string {
        return `${this.baseUrl}/${id}-M.jpg`;
    }

    getLargeCover(id: number): string {
        return `${this.baseUrl}/${id}-L.jpg`;
    }
}
