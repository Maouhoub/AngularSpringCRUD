import {Injectable} from '@angular/core';

@Injectable()
export class FirstService{
  info = {
    nom: 'med',
    email: 'm1m@gmail.com',
    tel: 7638292622

  };
  comments = [
    {
      date: new Date(), message: 'A',
    },
    {
      date: new Date(), message: 'B',
    },
    {
      date: new Date(), message: 'C',
    }
  ];

  add(a){
    a.date = new Date();
    this.comments.push(a);


  }

  getComments(){
    return this.comments;
  }

  getInfo()
  {
    return this.info;
  }


}

