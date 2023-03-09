// Route컴포넌트를 이용하여 각 라우트의 경로를 설정
import LoginPage from "../src/Pages/LoginPage";
import RegisterPage from "../src/Pages/RegisterPage";
import PostPage from "../src/Pages/PostPage";
import WritePage from "../src/Pages/WritePage";
import PostListPage from "../src/Pages/PostListPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      {/* <Route path="/:username" element={<PostListPage />} />
      <Route path="/:username/:postId" element={<PostPage />} /> */}
      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
