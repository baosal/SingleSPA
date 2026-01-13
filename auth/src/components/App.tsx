import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './routes/Home.tsx';
import { NotFound } from './routes/NotFound.tsx';
import { WithToken } from './routes/WithToken.tsx';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route index={true} element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/test-api" element={<WithToken />} />
      </Route>
    </Routes>
  );
};
