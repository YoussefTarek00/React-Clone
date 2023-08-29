import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Root from "./components/Root";
import Home from "./components/Pages/HomePages/Home/Home";
import PostsList from "./components/Pages/HomePages/Home/post section/PostsList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<PostsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
