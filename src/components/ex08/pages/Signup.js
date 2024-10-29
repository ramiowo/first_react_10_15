import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    /* &::placeholder {
      color: gray;
    } */
  }

  p {
    font-size: 14px;
    color: crimson;
    margin: 3px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  cursor: ${(props) => props.$isPointer};
  opacity: ${(props) => props.$isActive};
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const nav = useNavigate();

  const singupSubmit = (data) => {
    alert(`${data.username}님 회원가입 되었습니다.`);
    nav("/login");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(singupSubmit)}>
        <h2>회원가입</h2>

        <input
          {...register("userid", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 3,
              message: "아이디는 세자리 이상으로 하세요.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.userid?.message}</p>

        <input
          {...register("userpassword", {
            required: "비밀번호는 필수 입니다.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상 입력하세요.",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <p>{errors?.userpassword?.message}</p>

        <input
          {...register("username", {
            required: "이름은 필수 입니다.",
          })}
          type="text"
          placeholder="이름"
        />

        <input
          {...register("useremail", {
            required: true,
          })}
          type="text"
          placeholder="이메일"
        />
        <p>{errors?.useremail?.message}</p>
        <Button
          $isActive={isValid ? "1" : "0.5"}
          $isPointer={isValid ? "pointer" : "default"}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
