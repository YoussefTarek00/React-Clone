import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Root from "./components/Root";
import Home from "./components/Pages/HomePages/Home/Home";
import PostsList from "./components/Pages/HomePages/Home/post section/PostsList";
import SinglePost from "./components/Pages/HomePages/Home/post section/single post/SinglePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="blog">
            <Route index element={<PostsList />} />
            <Route path=":id" element={<SinglePost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
