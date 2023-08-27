import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000/api/v1';

  getReports() {
    return this.http.get(this.rootURL + '/reports');
  }

  addReport(report: any) {
    return this.http.post(this.rootURL + '/reports', {report}, {responseType: 'blob'});
  }

  editReport(report: any) {
    return this.http.put(this.rootURL + '/reports', {report});
  }

  deleteReport(reportId: any) {
    console.log('deleting report:::', reportId);
    return this.http.delete(`${this.rootURL}/reports/${reportId}`);
  }
}
