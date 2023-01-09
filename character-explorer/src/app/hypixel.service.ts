import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SkyblockDataResponse {
  success: boolean;
  profiles: SkyblockProfile[];
}

export interface SkyblockProfile {
  profile_id: string;
  cute_name: string;
  members: SkyblockProfileMembers;
}

export interface SkyblockProfileMembers {
  [key: string]: SkyblockProfileMember;
}

export interface SkyblockProfileMember {
  pets: SkyblockPet[];
}

export interface SkyblockPet {
  type: string;
  exp: number;
  active: boolean;
  tier: string;
  heldItem: string;
  candyUsed: number;
  skin: string;
}

@Injectable({
  providedIn: 'root'
})
export class HypixelService {

  private baseHypixelUrl = "https://api.hypixel.net/";
  private profileRoute = "skyblock/profiles";

  constructor(private httpClient: HttpClient) { }

  getSkyblockProfiles(uuid: string): Observable<SkyblockDataResponse> {
    return this.httpClient.get<SkyblockDataResponse>(`${this.baseHypixelUrl}${this.profileRoute}?uuid=${uuid}`);
  }
}
