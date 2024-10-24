import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Sheader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #333333;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      color: #333333;
      font-size: 20px;
      a {
        color: #ffffff;
      }
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
          <Link to="/sub/0">1번 서브페이지</Link>
        </li>
        <li>
          <Link to="/sub/1">2번 서브페이지</Link>
        </li>
      </ul>
    </Sheader>
  );
};

export default Header;
