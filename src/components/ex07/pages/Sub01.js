import { useParams } from "react-router-dom";

const subPageData = [
  {
    id: 0,
    title: "SUB 01",
    desc: "첫번째 서브페이지",
  },
  {
    id: 1,
    title: "SUB 02",
    desc: "두번째 서브페이지",
  },
];

const Sub01 = () => {
  const params = useParams();
  // =>router 경로중 변수값을 얻어옴
  // =>객체로 반환됨
  // const {id} = useParams();
  // =>객체 비구조화 할당 이용할수 있음
  const id = params.id;

  return (
    <div>
      <h2>{subPageData[id].title}</h2>
      <p>{subPageData[id].desc}</p>
    </div>
  );
};

export default Sub01;
