const baseUrl: string = "http://localhost:5000";

export const GET_ENDPOINT = `${baseUrl}/notes`;
export const GETBYID_ENDPOINT = `${GET_ENDPOINT}/:id`;
export const POST_ENDPOINT = GET_ENDPOINT;
export const UPDATE_ENDPOINT = `${GET_ENDPOINT}/:id`;
export const DELETE_ENDPOINT = `${GET_ENDPOINT}/`;
