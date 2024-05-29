import { 
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes 
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <h1>Home Page</h1>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <h1>Search Page</h1>
        </Layout>} />
        <Route path="/register" element={<Layout> <Register /></Layout>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;