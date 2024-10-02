import { useEffect, useState } from 'react';

export interface Interview {
  id: string;
  name: string;
  image: string;
  intro: string;
  interview_text: string;
  created_at: string;
}

const useGetInterviews = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch('/api/entrevistas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Interview[] = await response.json();
        setInterviews(data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
        setError('Error fetching interviews');
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  return { interviews, loading, error };
};

export default useGetInterviews;
