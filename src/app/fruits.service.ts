import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private _http: HttpClient) { }

  getAllfruits()
  {
    const _url ="http://localhost:3000/fruits";
    return this._http.get(_url);
  }

  getViewfruit(P_Id:any)
  {
    const _url ="http://localhost:3000/fruits?p_id="+P_Id;
    return this._http.get(_url);
  }

  getdelete(pid:any)
  {
    const _url ="http://localhost:3000/fruits/"+pid;
    return this._http.delete(_url);
  }

  getupdate(pid:any, ProductBody:any)
  {
    const _url ="http://localhost:3000/fruits/"+pid;
    return this._http.put(_url, ProductBody);
  }

  createfruit(ProductBody:any)  {
    const _url ="http://localhost:3000/fruits/";
    return this._http.post(_url,ProductBody);
  }

  getViewByCategory(catId:any)
  {
    const _url ="http://localhost:3000/fruits?p_category="+catId;
    return this._http.get(_url);
  }

  getCatagorie()
  {
    const _url="http://localhost:3000/Catagorie";
    return this._http.get(_url);
  }
}

