import { openDB } from 'idb';
import { EditorDBSchema } from './types';

const DB_NAME = 'editor-db';
const STORE_NAME = 'editor-state';

export class EditorDB {
  async init() {
    return openDB<EditorDBSchema>(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME, { keyPath: 'path' });
      },
    });
  }

  async saveEditorState(path: string, content: string) {
    const db = await this.init();
    await db.put(STORE_NAME, {
      path,
      content,
      lastModified: Date.now(),
    });
  }

  async getEditorState(path: string) {
    const db = await this.init();
    return db.get(STORE_NAME, path);
  }
}

export const editorDB = new EditorDB();
