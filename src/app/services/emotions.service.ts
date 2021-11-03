import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { EmotionModel } from '../models/emotion.model';

@Injectable({
  providedIn: 'root'
})

export class EmotionService {
  Headers = new Headers
  private configUrl: string = '';
  constructor(private http:HttpClient) { }
  
  getEmotions(){
    this.configUrl = `${AppSettings.API_ENDPOINT}reactions.php`;
    const apod = this.http.get<any>(this.configUrl);
    return apod;
  }

  sendEmotion(emocion:EmotionModel){
    this.configUrl = `${AppSettings.API_ENDPOINT}reactions.php`;
    return this.http.post<any>(this.configUrl,emocion);
  }
  
}
