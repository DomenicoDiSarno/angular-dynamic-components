import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  private datas = {
    domenico: {name: 'Domenico', bio: 'Brave as they come'},
    drIQ: {
      name: 'Dr IQ',
      bio: 'Smart as they come'
    },
    hiring: {
      headline: 'Hiring for several positions',
      body: 'Submit your resume today!'
    },
    apply: {
      headline: 'Openings in all departments',
      body: 'Apply today'
    }
  };

  getDataByName(name: string) {
    return this.datas[name];
  }
}
