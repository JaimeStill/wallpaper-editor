import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private key: string = 'jps-wp-editor-theme'
  isLight: boolean;

  private cacheTheme = () => localStorage.setItem(this.key, this.isLight.toString());

  private loadTheme = (): boolean => {
    const cache = localStorage.getItem(this.key);

    return cache
      ? cache === 'true'
      : this.isLight ?? true;
  }

  setOverlayContainerTheme = () => {
    if (this.isLight) {
      this.overlay.getContainerElement().classList.remove('app-dark');
      this.overlay.getContainerElement().classList.add('app-light');
    } else {
      this.overlay.getContainerElement().classList.remove('app-light');
      this.overlay.getContainerElement().classList.add('app-dark');
    }
  }

  toggleTheme = () => {
    this.isLight = !this.isLight;
    this.setOverlayContainerTheme();
    this.cacheTheme();
  }

  constructor(
    private overlay: OverlayContainer
  ) {
    this.isLight = this.loadTheme();
    this.setOverlayContainerTheme();
  }
}
