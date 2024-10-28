// import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>Home</h2>
      {
        <form>
          <input type="radio" name="hi" id="tab" />
          <label for="tab">선택1</label>

          <input type="radio" name="hi" id="tab" />
          <label for="tab2">선택2</label>
        </form>
      }
      ;
    </div>
  );
};

export default Main;
