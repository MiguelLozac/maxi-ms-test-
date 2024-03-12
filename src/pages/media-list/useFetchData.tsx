import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { entriesSlice } from '../../redux/states';
interface ProgramResultsResponseInterface {
    total: number,
    entries: ProgramInfoInterface[]
}

export const useFetchData = () => {
  const [data, setData] = useState<ProgramInfoInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: ProgramResultsResponseInterface = await response.json();
        dispatch(entriesSlice.actions.setEntries(jsonData.entries.length));
        setData(jsonData.entries);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
