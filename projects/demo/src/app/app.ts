import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService, MovieViewModel } from 'ng-tmdb';

import { Breadcrumb } from 'primeng/breadcrumb';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, InputText, RouterOutlet, Card, Breadcrumb, Menubar],
  providers: [MovieService, MovieViewModel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private _movieService = inject(MovieService);
  protected readonly title = signal('ng-tmdb demo');

  protected readonly menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
    { label: 'Movies', icon: 'pi pi-fw pi-film', routerLink: '/movies' },
    { label: 'About', icon: 'pi pi-fw pi-info', routerLink: '/about' },
  ];

  ngOnInit() {}
}
