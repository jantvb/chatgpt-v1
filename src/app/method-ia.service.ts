import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MethodIaService {

  constructor(private http: HttpClient) { }

  chat(inputData: string): Observable<any> {

    // https://platform.openai.com/account/api-keys

    const configuration = new Configuration({
      organization: environment.organization,
      apiKey: environment.apiKey,
    });
    const openai = new OpenAIApi(configuration);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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',
    });

    const request = {
      model:       "gpt-3.5-turbo",
      messages:    [{"role": "user", "content": inputData}],
      temperature: 0.7
    }

    return this.http.post('https://api.openai.com/v1/chat/completions', request, { headers })
      
  }
}
