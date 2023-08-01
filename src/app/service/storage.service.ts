import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setItem(key: string, value: any): Promise<void> {
    await Storage.set({
      key, value: JSON.stringify(value)
    })
  }

  async getItem(key: string): Promise<any> {
    return await Storage.get({key});
  }

  async removeItem(key: string): Promise<any>{
    await Storage.remove({key});
  }

  async clear(): Promise<any>{
    await Storage.clear();
  }

  async keys(): Promise<any>{
    await Storage.keys();
  }

}
