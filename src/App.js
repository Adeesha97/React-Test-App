import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoDashboard from './pages/TodoDashboard';
import Login from './pages/Login';

function App() {
  return (
<Router>
  <div className="container">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<TodoDashboard />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
