import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Root from "./components/Root";
import Home from "./components/Pages/HomePages/Home/Home";
import UserTableList from "./components/Pages/HomePages/Home/user section/UserTableList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="usertable" element={<UserTableList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
