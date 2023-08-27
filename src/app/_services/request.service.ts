import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000/api/v1';

  getRequests() {
    return this.http.get(this.rootURL + '/requests');
  }

  addRequest(request: any) {
    return this.http.post(this.rootURL + '/requests', {request}, {responseType: 'blob'});
  }

  editRequest(request: any) {
    return this.http.put(this.rootURL + '/requests', {request});
  }

  deleteRequest(requestId: any) {
    console.log('deleting request:::', requestId);
    return this.http.delete(`${this.rootURL}/requests/${requestId}`);
  }
}
