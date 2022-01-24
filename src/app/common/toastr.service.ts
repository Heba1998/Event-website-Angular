// import { Injectable } from '@angular/core';

import { InjectionToken } from "@angular/core";

// declare let toastr:any;
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {

//   constructor() { }

//   success(message:any, title?:string)
//   {
//    toastr.success(message, title)
//   }
//   info(message:string, title?:string)
//   {
//    toastr.info(message, title)
//   }
//   warning(message:string, title?:string)
//   {
//    toastr.warning(message, title)
//   }
//   error(message:string, title?:string)
//   {
//    toastr.error(message, title)
//   }
// }


export const TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr{
  success(msg:string, title?:string): void
  info(msg:string, title?:string): void
  warning(msg:string, title?:string): void
  error(msg:string, title?:string): void
}