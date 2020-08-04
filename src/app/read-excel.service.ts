import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReadExcelService {

  public data: any

  constructor(private http: HttpClient) { }

  get(){
    let url = "/assets/excel.xlsx";
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    console.log(req)
    req.responseType = "arraybuffer";
    req.onload =  (e) => {
        var data = new Uint8Array(req.response);
        console.log(data);
        var workbook = XLSX.read(data, {type: "array"});
        console.log(workbook);
        var sheet_name_list = workbook.SheetNames;
        console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
        //var  data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        
      };
    return req.send(this.data);
    //return this.data;

    
  }

  getjson(){
    let url = "/assets/csv.json";
    return this.http.get(url);

  }
  
  public getJSON(): Observable<any> {
    return this.http.get("/assets/csv.json");
}
}
