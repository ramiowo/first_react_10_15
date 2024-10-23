import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";

const Ex07 = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* => /* Asterlisk (애스털리스크) */}
      </Routes>
    </HashRouter>
  );
};

export default Ex07;

// *react-router-dom
// =>리액트 경로 설정할때 사용
// =>HashRouter -> Routes -> Route 순으로 구성
// =>Route의 path props으로 경로 설정
// =>Route의 element props으로 컴포넌트 설정
// =>404 페이지는 /*로 설정
