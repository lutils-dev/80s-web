export interface FileSystemDBSchema {
  'workspace-roots': {
    key: string; // workspace path/id
    value: {
      handle: FileSystemDirectoryHandle;
      path: string;
      name: string;
      lastAccessed: number;
    };
  };
}
