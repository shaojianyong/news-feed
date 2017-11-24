import { Injectable } from '@angular/core';
import { IpcRendererService } from '../shared/service/ipc-renderer.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

@Injectable()
export class LoginService {

  constructor(private ipcRendererService: IpcRendererService) {
  }

  login(user: any): Observable<any> {
    console.log(user);
    return Observable.fromPromise(this.ipcRendererService.api('login', user));
  }

}
