import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import ProjectForm from "./pages/ProjectForm";
import ProjectView from "./pages/ProjectView";
import Guide from "./pages/Guide";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/create" element={<ProjectForm />} />
          <Route path="/edit/:id" element={<ProjectForm />} />
          <Route path="/view/:id" element={<ProjectView />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

