import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HypixelService } from '../hypixel.service';
import { UuidService } from '../uuid.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: string = "";
  validUsername: boolean = true;

  constructor(private uuidService: UuidService, private router: Router) { }

  onSearchButton() {
    this.uuidService.getUUID(this.username).subscribe((data) => {
      if (data.status === "OK") {
        this.validUsername = true;
        this.router.navigateByUrl('/info/' + data.id);
      } else {
        this.validUsername = false;
      }
    });
  }
}
