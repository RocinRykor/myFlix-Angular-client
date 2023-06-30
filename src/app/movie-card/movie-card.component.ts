import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import {MatDialog} from "@angular/material/dialog";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Get All Movies from API
   * @returns Movie JSON Data
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Checks API to see if movie is favorite
   * @returns boolean
   */
  isFavorite(id: string): boolean {
    return this.fetchApiData.isFavoriteMovie(id);
  }

  /**
   * Opens a simple dialog box with the title and contents displayed
   * @param title - Title of dialog box
   * @param content - Main body content of dialog box
   */
  openDialog(title: string, content: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        title: title,
        content: content
      },
    });
  }

  /**
   * Add movie to user's favorites
   * @param id - ObjectID of selected Movie
   */
  addFavorite(id: string) {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Movie added to favorites', 'OK', {
        duration: 4000,
      });
      this.ngOnInit()
    });
  }

  /**
   * Remove movie from user's favorites
   * @param id - ObjectID of selected Movie
   */
  removeFavorite(id: string) {
    console.log(id);
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Movie removed from favorites', 'OK', {
        duration: 4000,
      });
      this.ngOnInit()
    });
  }
}
