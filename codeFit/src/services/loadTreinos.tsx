import { useState, useEffect } from 'react';
import { fetchTreinos } from './apiGetTreinos';

export const loadTrainings = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrainings = async () => {
      try {
        const fetchedData = await fetchTreinos();
        setData(fetchedData);
      } catch (error) {
        console.error('Erro ao carregar treinos:', error);
        setError('Erro ao carregar treinos');
      } finally {
        setLoading(false);
      }
    };

    loadTrainings();
  }, []);

  return { data, loading, error };
};
