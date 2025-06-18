import { Injectable,Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  setItem(key: string, value: any) {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): string|null{
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    else {
      return null;
    }
  }

  clear(){
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
