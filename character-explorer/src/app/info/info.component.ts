import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HypixelService, SkyblockProfile, SkyblockProfileMember } from '../hypixel.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private hypixelService: HypixelService) { }

  uuid: string = "";
  profiles: SkyblockProfile[] = [];
  selectedProfile: string = "";
  userMember: (SkyblockProfileMember | undefined)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.hypixelService.getSkyblockProfiles(this.uuid).subscribe(data => {
        if (data.success) {
          this.profiles = data.profiles;
          this.selectedProfile = this.profiles[0].profile_id;

          for (let key in this.profiles[0].members) {
            if (key === this.uuid) {
              this.userMember = this.profiles[0].members[key];
              break;
            }
          }

        } else {
          console.log("Error getting data from Hypixel API");
        }
      });
    });
  }

  profileChange() {
    console.log("Changed profile selection")
    for (let profile of this.profiles) {
      if (profile.profile_id === this.selectedProfile) {
        for (let key in profile.members) {
          if (key === this.uuid) {
            this.userMember = profile.members[key];
            break;
          }
        }
        break;
      }
    }
  }
}
