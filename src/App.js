import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullComment from "./components/FullComment";
import HomePage from "./Pages/HomePage";
import NewCommentPage from "./Pages/NewCommentPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comment/:id" element={<FullComment />} />
            <Route path="/new-comment" element={<NewCommentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </section>
  );
};

export default App;
