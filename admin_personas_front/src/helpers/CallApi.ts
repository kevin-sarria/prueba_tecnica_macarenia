import { getEnvVariables } from "."

const { API_URL } = getEnvVariables();

type URL = string;
type Data = BodyInit;

export const CallApi = {
    get: async( url:URL ) =>  fetch(`${API_URL}${url}`, {method: 'GET', mode: "cors"}).then( resp => resp.json() ),
    post: async( url:URL, data:Data ) => fetch( `${API_URL}${url}`, { method: 'POST', mode: "cors", body: data } )
}