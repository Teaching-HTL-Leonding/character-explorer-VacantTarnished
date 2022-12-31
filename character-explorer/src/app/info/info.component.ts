import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HypixelService, SkyblockProfile } from '../hypixel.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private hypixelService: HypixelService) { }

  uuid: string = "";
  profiles: SkyblockProfile[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.hypixelService.getSkyblockData(this.uuid).subscribe(data => {
        if (data.success) {
          this.profiles = data.profiles;
        } else {
          console.log("Error getting data from Hypixel API");
        }
      });
    });
  }
}
