import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './routes/Home.tsx';
import { NotFound } from './routes/NotFound.tsx';
import { WithToken } from './routes/WithToken.tsx';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/user-info">
        <Route index={true} element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user-info/test-api" element={<WithToken />} />
      </Route>
    </Routes>
  );
};
