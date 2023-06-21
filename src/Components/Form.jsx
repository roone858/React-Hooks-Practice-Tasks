import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  function handleSubmit(e) {
     setFlag(true);
    e.preventDefault();
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <label htmlFor="">First Name : </label>
          <input name="firstName" onChange={handleChange} type="text" />
        </div>
        <div>
          {" "}
          <label htmlFor="">Last Name : </label>
          <input name="lastName" onChange={handleChange} type="text" />
        </div>
        <div>
          {" "}
          <label htmlFor=""> Email : </label>
          <input name="email" onChange={handleChange} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
     {flag && <div>
        <h1 htmlFor="">First name : {data.firstName}</h1>
        <h1 htmlFor="">Last name : {data.lastName}</h1>
        <h1 htmlFor="">Email : {data.email}</h1>
      </div>}
    </>
  );
}
