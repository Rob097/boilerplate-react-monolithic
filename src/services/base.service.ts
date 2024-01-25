import { Filters } from "@/models/criteria.model";
import { displayMessages } from "@/components/alerts/snack";

export const fetcher = async (url: string, returnHeaders?: boolean) => {
  const response = fetch(url)
    .then(async (r) => {
      return r.json().then((json) => {
        console.log("Fetcher Response: %O", json);
        if (!r.ok && r.status !== 404) {
          console.debug("Fetcher Error: %O", json);
          return Promise.reject(json?.error || "Errore sconosciuto");
        }

        const result = {
          ...json
        }

        if(result.messages) {
          displayMessages(result.messages);
        }

        if (returnHeaders) {
          result["headers"] = r.headers;
        }

        return result;
      });
    });

  return response;
}

// export const BASE_URL = "http://localhost:8083/api";
export const BASE_URL = process.env.REACT_APP_BASE_URL;

export interface BaseService {
  getById(id: number, view?: string): Promise<any>;
  getByCriteria(criteria: Filters): Promise<any>;
}