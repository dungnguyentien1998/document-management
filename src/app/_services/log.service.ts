import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000/api/v1';

  getLogs() {
    return this.http.get(this.rootURL + '/logs');
  }

  addLog(log: any) {
    return this.http.post(this.rootURL + '/logs', {log}, {responseType: 'blob'});
  }

  editLog(log: any) {
    return this.http.put(this.rootURL + '/logs', {log});
  }

  deleteLog(logId: any) {
    console.log('deleting log:::', logId);
    return this.http.delete(`${this.rootURL}/logs/${logId}`);
  }
}
