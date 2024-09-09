import { Tasks } from '@features';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
