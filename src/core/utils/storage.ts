export interface Options {
  noPrefix: boolean;
}

export class Storage {
  public prefix: string;
  private storage: any;

  constructor(storage: any, prefix = '') {
    this.storage = storage;
    this.prefix = prefix;
  }

  set(key: string, value: any, options?: Options): void {
    const queryKey = this.getPrefixedKey(key, options);
    this.storage.setItem(queryKey, JSON.stringify(value));
  }

  get<T>(key: string, defaultValue?: T, options?: Options): T {
    const queryKey = this.getPrefixedKey(key, options);
    const value = JSON.parse(this.storage.getItem(queryKey));
    if (value === null && defaultValue !== undefined) {
      return defaultValue;
    }

    return value;
  }

  rm(key: string) {
    const queryKey = this.getPrefixedKey(key);
    this.storage.removeItem(queryKey);
  }

  keys(): string[] {
    const keys: string[] = [];
    const allKeys = Object.keys(this.storage);
    if (this.prefix.length === 0) {
      return allKeys;
    }

    allKeys.forEach(key => {
      if (key.indexOf(this.prefix) !== -1) {
        keys.push(key.replace(this.prefix, ''));
      }
    });

    return keys;
  }

  flush() {
    if (this.prefix.length) {
      this.keys().forEach(key => {
        this.storage.removeItem(this.getPrefixedKey(key));
      });
      return;
    }

    this.storage.clear();
  }

  private getPrefixedKey(key: string, options?: Options) {
    options = options || { noPrefix: false };
    if (options.noPrefix) {
      return key;
    }

    if (!this.prefix) {
      return key;
    }

    return `${this.prefix}.${key}`;
  }
}

export const local = new Storage(localStorage);
export const session = new Storage(sessionStorage);
