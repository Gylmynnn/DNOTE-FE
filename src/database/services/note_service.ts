import axios from "axios";
import {
  ApiResponse,
  NoteFormType,
  NotesType,
} from "@/database/models/note_model";
import {
  DELETE_ENDPOINT,
  GET_ENDPOINT,
  GETBYID_ENDPOINT,
  POST_ENDPOINT,
  UPDATE_ENDPOINT,
} from "@/database/config/endpoint";

export const getNotesData = async () => {
  try {
    const response = await axios.get<ApiResponse>(GET_ENDPOINT);
    const dataNote = response.data.data;
    return dataNote;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const getNotesDataById = async ({ _id }: NotesType) => {
  try {
    const response = await axios.get<ApiResponse>(GETBYID_ENDPOINT + _id);
    const dataNote = response.data.data;
    return dataNote;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const postNoteData = async ({ title, note }: NoteFormType) => {
  try {
    const request = await axios.post(POST_ENDPOINT, {
      title,
      note,
    });
    return request;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const patchNoteData = async ({ _id, title, note }: NoteFormType) => {
  try {
    const response = await axios.patch(UPDATE_ENDPOINT + _id, {
      title,
      note,
    });
    return response;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const deleteNoteData = async (_id: string) => {
  try {
    const request = await axios.delete(DELETE_ENDPOINT + _id);
    return request;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
