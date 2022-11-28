import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private API_SERVER ="http://localhost:8080/libro/";

  constructor(
    private httpClient :HttpClient
  ) { }


  public ObtenerLibros():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
  
  public guadarLibro(libro:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, libro);
  }


}
