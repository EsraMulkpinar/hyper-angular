import { Inject, Injectable, InjectionToken } from '@angular/core';

// InjectionToken tanımlama
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => typeof localStorage !== 'undefined' ? localStorage : new NoopStorage()
});

// localStorage'ın sunucu tarafında mevcut olmadığı durumda kullanılacak geçici depolama
class NoopStorage implements Storage {
  private data: Record<string, string> = {};

  length = 0;

  clear(): void {
    this.data = {};
    this.length = 0;
  }

  getItem(key: string): string | null {
    return this.data[key] || null;
  }

  key(index: number): string | null {
    return Object.keys(this.data)[index] || null;
  }

  removeItem(key: string): void {
    delete this.data[key];
    this.length--;
  }

  setItem(key: string, value: string): void {
    this.data[key] = value;
    this.length++;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string): string | null {
    return this.storage.getItem(key);
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
