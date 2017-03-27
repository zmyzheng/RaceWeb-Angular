import { RACES } from './races/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Race } from './races/race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http){}

  getRaces() {
    return this.http.get('races.json')
      .map(response => <Race[]>response.json().racesData);
  }
}
