import { openDB } from 'idb';
import { FileSystemDBSchema } from './types';

const DB_NAME = 'filesystem-db';
const STORE_NAME = 'workspace-roots';

export class FileSystemDB {
  async init() {
    return openDB<FileSystemDBSchema>(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME, { keyPath: 'path' });
      },
    });
  }

  async storeWorkspaceRoot(handle: FileSystemDirectoryHandle) {
    const db = await this.init();
    await db.put(STORE_NAME, {
      handle,
      path: handle.name,
      name: handle.name,
      lastAccessed: Date.now(),
    });
  }

  async getWorkspaceRoots() {
    const db = await this.init();
    return db.getAll(STORE_NAME);
  }

  async getWorkspaceRoot(path: string) {
    const db = await this.init();
    return db.get(STORE_NAME, path);
  }
}

export const fileSystemDB = new FileSystemDB();
