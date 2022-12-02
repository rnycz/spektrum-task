import React from "react";
import "./Form.css";

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>FORMULARZ REJESTRACYJNY</h3>
        <hr />

        <label htmlFor="login">
          <b>Login:</b>
        </label>
        <input type="text" name="login" id="login" required />

        <label htmlFor="password">
          <b>Hasło:</b>
        </label>
        <input type="password" name="password" id="password" required />

        <label htmlFor="email">
          <b>E-mail:</b>
        </label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="phone">
          <b>Numer telefonu:</b>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        />

        <div>
          <input type="checkbox" id="rules" name="rules" />
          <label htmlFor="rules">Akceptuję Regulamin</label>
        </div>

        <button type="submit">zapisz</button>
      </form>
    </div>
  );
};

export default Form;
