import { Injectable } from '@angular/core';
//import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReadExcelService {

  public data: any

  constructor(private http: HttpClient) { }

  
  public getJSON(): Observable<any> {
    return this.http.get("/assets/establecimientos.json");
}
}
