import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Sheader = styled.div`
  width: 100%;
  height: 80px;

  ul {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      color: #333333;
      font-size: 30px;
    }
  }
`;

const Header = () => {
  return (
    <Sheader>
      <ul>
        <li>
          <Link to="/">메인 페이지</Link>
        </li>
        <li>
          <Link to="/sub01">1번 서브페이지</Link>
        </li>
        <li>
          <Link to="/sub02">2번 서브페이지</Link>
        </li>
      </ul>
    </Sheader>
  );
};

export default Header;
