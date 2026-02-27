import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class DebugService {

  private enabled = environment.debug;

  log(message: string, ...data: any[]) {
    if (!this.enabled) return;
    console.log(`[DEBUG] ${message}`, ...data);
  }
  warn(message: string, ...data: any[]) {
    if (!this.enabled) return;
    console.log(`[DEBUG] ${message}`, ...data);
  }
  error(message: string, ...data: any[]) {
    if (!this.enabled) return;
    console.log(`[DEBUG] ${message}`, ...data);
  }
  trace(message: string, ...data: any[]) {
    if (!this.enabled) return;
    console.log(`[DEBUG] ${message}`, ...data);
  }
}
