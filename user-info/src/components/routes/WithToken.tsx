import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useAuth } from 'react-oidc-context';
import { Alert } from './Alert.tsx';

export const WithToken: FC = () => {
  const auth = useAuth();

  const url = 'https://dev.sagaftraplans.org/phub/api/participant/23117401';
  const queryFn = async () => {


    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${auth.user?.access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return await response.json();
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['WithToken'],
    queryFn,
    retry: false, // only setting to `false` for sake of demo, normally you'd want this `true`
  });

  return error ? (
    <Alert variant="error">{error.message}</Alert>
  ) : isPending ? (
    <div>Loading...</div>
  ) : (
    <div><code>{url}</code>
      <Alert variant="success">{JSON.stringify(data, null, 2)}</Alert>
    </div>
  );
};
