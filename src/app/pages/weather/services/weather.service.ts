import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coord, WeatherData } from '../../../shared/interface/weather.interface';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params: params });
  }

  public getWeatherByCoords(coord: Coord): Observable<WeatherData> {
    const params = new HttpParams()
      .set('lat', coord.latitude)
      .set('lon', coord.longitude)

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params: params });
  }
}
