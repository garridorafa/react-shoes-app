import { useEffect, useRef, useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const isMountedRef = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMountedRef.current = true;
    const init = async () => {
      try {
        const res = await fetch(baseUrl + url);
        if (res.ok) {
          const json = await res.json();
          if (isMountedRef.current) setData(json);
        } else {
          throw res;
        }
      } catch (e) {
        if (isMountedRef.current) setError(e);
      } finally {
        if (isMountedRef.current) setLoading(false);
      }
    };
    init();

    return () => {
      isMountedRef.current = false;
    };
  }, [url]);

  return { data, error, loading };
}
