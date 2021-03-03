import React from "react";

const INITIAL_STATE = {
  name: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = React.useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <i className="bi bi-person display-4"></i>
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className="form-control"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          className="form-control"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-outline-success btn-block">
          <i className="bi bi-person"></i> Login
        </button>
      </div>
    </form>
  );
};

export default Login;
