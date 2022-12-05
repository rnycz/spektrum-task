import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { StarWarsData, FetchData, ContextState } from "../assets/types";

export const useFetch = (url: string, id: number) => {
  const { setStar_wars_data }: ContextState = useStateContext();
  const [data, setData] = useState<FetchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | any>();

  const makeApiCall = async (): Promise<void> => {
    try {
      const response: Response = await fetch(url + id);
      const json: FetchData = await response.json();
      setLoading(false);
      setError("");
      setData([json]);
      setStar_wars_data((current: StarWarsData[]) => [
        ...current,
        {
          name: json.name,
          created: json.created,
          vehicles: json.vehicles,
        },
      ]);
      if (response.status === 404) {
        setError("Not Found");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, data, error, makeApiCall };
};
