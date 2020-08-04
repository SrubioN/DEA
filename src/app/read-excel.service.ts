import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadExcelService {

  public excel: any

  constructor(private http: HttpClient) { }


  async get_excel(){
    let urls = "/assets/excel.xlsx";
    let req = new XMLHttpRequest();
    req.open("GET", urls, true);
    req.responseType = "arraybuffer";
    req.onload =  (e) => {
      var data = new Uint8Array(req.response);
      //console.log(data);
      var workbook = XLSX.read(data, {type: "array"});
      //console.log(workbook);
      var sheet_name_list = workbook.SheetNames;
    //  console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
      //this.excel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      //return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).toPromise()
      //.pipe(tap(response));
    };
    req.send()
  
  }

   set_excel(excel){
    this.excel = excel;
  }

  /*
  get(req){
    
    req.onload =  (e) => {
        var data = new Uint8Array(req.response);
        //console.log(data);
        var workbook = XLSX.read(data, {type: "array"});
        //console.log(workbook);
        var sheet_name_list = workbook.SheetNames;
      //  console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
        //this.excel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        //return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      };
    req.send()

  }

*/




  }

