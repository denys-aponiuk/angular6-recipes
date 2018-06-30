import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }


  onSaveData() {
    this.dataStorageService.storeRecipe()
      .subscribe((response: Recipe[]) => {
        console.log(response);
      });
  }

  onGetRecipeData() {
    this.dataStorageService.getRecipeStorage();
  }

  onLogout() {
    this.authService.logout();
  }

}
