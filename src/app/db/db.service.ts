import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  private data : object[] = 
    [
      {id: '1', name: "Asaad Saad", email: 'asaad@mum.edu'},
      {id: '2', name: "Payman Salek", email: 'psalek@mum.edu'},
      {id: '3', name: "Keith Levi", email: 'klevi@mum.edu'},
      {id: '4', name: "Renuka Mohanraj", email: 'rmohanraj@mum.edu'}
    ]
  constructor() { }
  getData(){
    return this.data;
  }
  getUserData(i: string) {
    for(let d of this.data)
    if(d['id'] == i)
      return d;
    
    return null;
  }
 
}
