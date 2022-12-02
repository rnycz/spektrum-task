import { useState } from "react";

export type fetchData = {
  name: string;
  eye_color: string;
  birth_year: string;
};

export const useFetch = (url: string, id: number) => {
  const [data, setData] = useState<fetchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  const makeApiCall = (): void => {
    fetch(url + id)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((newData: fetchData) => {
        setData([newData]);
        setError(null);
      })
      .catch((err: any) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, data, error, makeApiCall };
};
