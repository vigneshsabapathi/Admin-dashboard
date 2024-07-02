import React, { useState } from "react";

const LoginForm = () => {
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const response = await fetch(
      "https://api.microvectors.online/api_green_v1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          call_flag: "LOGIN.GATEPASS_SUPERUSER",
          data: {
            superuser_email_id: adminId,
            superuser_password: adminPassword,
            login_ip: "122.172.82.90",
          },
        }),
      }
    );

    const data = await response.json();

    if (data.Login_status === 1) {
      sessionStorage.setItem("token", JSON.stringify(data.token));
      sessionStorage.setItem("response", JSON.stringify(data.superuser_id));
      setMessage("LOGIN SUCCESSFUL");
      window.location.href = "/super-user";
    } else {
      setMessage("LOGIN UNSUCCESSFUL");
    }
  };

  return (
    <section className="login py-5 bg-light">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-2">
            <img
              src="https://media.microvectors.com/public/Trustgrid.jpg"
              width="130"
              height="80"
              className="img-fluid"
              alt="Trustgrid"
            />
          </div>
          <div className="col-lg-6 text-center py-5">
            <h1 className="animate__animated animate__backInLeft">
              Please sign in
            </h1>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="adminId">
                Name
              </label>
              <input
                id="adminId"
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="adminPassword">
                Password
              </label>
              <input
                id="adminPassword"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={handleLogin}
            >
              Submit
            </button>
            {message && (
              <div className="alert alert-success mt-3">{message}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
