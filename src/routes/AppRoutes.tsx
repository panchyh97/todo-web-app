import { Tasks } from '@features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
