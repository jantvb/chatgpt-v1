import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MethodIaService {

  constructor(private http: HttpClient) { }

  callAPI(inputData: string): Observable<any> {

    // https://platform.openai.com/account/api-keys

    const configuration = new Configuration({
      organization: "my-organization",
      apiKey: 'my-key',
    });
    const openai = new OpenAIApi(configuration);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer my-key',
    });

    const request = {
      model:       "gpt-3.5-turbo",
      messages:    [{"role": "user", "content": inputData}],
      temperature: 0.7
    }

    return this.http.post('https://api.openai.com/v1/chat/completions', request, { headers })
      
  }
}
