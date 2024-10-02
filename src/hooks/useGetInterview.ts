import { useEffect, useState } from 'react';
import { Interview } from './useGetInterviews';

const useGetInterview = (id: string) => {
  const [interview, setInterview] = useState<Interview | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/entrevistas/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Interview = await response.json();
        setInterview(data);
      } catch (error) {
        console.error('Error fetching interview:', error);
        setError('Error fetching interview');
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [id]);

  return { interview, loading, error };
};

export default useGetInterview;
