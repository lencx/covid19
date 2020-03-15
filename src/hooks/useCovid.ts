import { useEffect, useState } from 'react';

/**
 * useCovid
 * @author lencx
 * @param {string} - api url
 */
export default function useCovid(url: string) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!url) return null;
      const data = await fetch(url).then(res => res.json());
      setState(data);
    };
    fetchData();
  }, []);

  return state;
}
