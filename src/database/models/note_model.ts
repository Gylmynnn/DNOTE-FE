export type NotesType = {
  _id: string;
  title: string;
  note: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteFormType = {
  _id?: string;
  title?: string;
  note?: string;
};

export type ApiResponse = {
  success: boolean;
  status: number;
  message: string;
  data: NotesType[];
};

export type ApiResponseWithId = {
  success: boolean;
  status: number;
  message: string;
  data: NotesType;
};
