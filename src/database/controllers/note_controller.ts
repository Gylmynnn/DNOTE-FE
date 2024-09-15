import { FormEvent } from "react";
import { deleteNoteData, postNoteData } from "../services/note_service";

export const handleCreateNote = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const title = formData.get("title") as string;
  const note = formData.get("note") as string;
  if (title && note) {
    const request = await postNoteData({ title, note });
    console.log(request);
  }
};

export const handleDeleteNote = async (_id: string) => {
  const response = await deleteNoteData(_id);
  return response;
};
