import { Injectable } from "@angular/core";

Injectable()
interface Iuser {
  username: string;
  password: string;
}

export class User implements Iuser{
    username: string;
    password: string;
}