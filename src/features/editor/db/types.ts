export interface EditorDBSchema {
  'editor-state': {
    key: string; // file path
    value: {
      path: string;
      content?: string;
      cursor?: {
        line: number;
        column: number;
      };
      history?: {
        undoStack: string[];
        redoStack: string[];
      };
      lastModified: number;
    };
  };
}
