import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { FieldValues, useForm } from "react-hook-form";
import { UseFormType, ContextState, StarWarsData } from "../../assets/types";
import "./Form.css";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }: UseFormType = useForm<FieldValues, any>();

  const { star_wars_data, setStar_wars_data }: ContextState = useStateContext();

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    let star_wars_dataUnique: StarWarsData[] = star_wars_data.filter(
      (element, index) =>
        index === star_wars_data.findIndex((e) => e.name === element.name)
    );

    console.log([
      { form_data: formData },
      { star_wars_data: star_wars_dataUnique },
    ]);

    try {
      let response: Response = await fetch("https://example/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { form_data: formData },
          { star_wars_data: star_wars_dataUnique },
        ]),
      });
      //let responseJson = await response.json();
      if (response.status === 200) {
        reset();
        setStar_wars_data([]);
      } else {
        console.log("ERROR");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>FORMULARZ REJESTRACYJNY</h3>
        <hr />

        <label htmlFor="login">
          <b>Login:</b>
        </label>
        <input
          type="text"
          id="login"
          {...register("login", { required: true })}
        />

        <label htmlFor="password">
          <b>Hasło:</b>
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />

        <label htmlFor="email">
          <b>E-mail:</b>
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          style={{
            borderBottom: errors.email
              ? "1.55px solid #FF0000"
              : "1.55px solid #000000",
          }}
        />
        {errors.email && (
          <span className="validation-error">
            Nieprawidłowy format adresu e-mail
          </span>
        )}

        <label htmlFor="phone">
          <b>Numer telefonu:</b>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: true,
            pattern: /^[0-9]+$/,
            maxLength: 9,
            minLength: 9,
          })}
          style={{
            borderBottom: errors.phone
              ? "1.55px solid #FF0000"
              : "1.55px solid #000000",
          }}
        />
        {errors.phone && (
          <span className="validation-error">Nieprawidłowy numer telefonu</span>
        )}

        <div className="rules">
          <input
            type="checkbox"
            id="rules"
            {...register("rules", { required: true })}
            style={{
              outline: errors.rules ? "2px solid #FF0000" : "",
            }}
          />
          <label htmlFor="rules">Akceptuję Regulamin</label>
          {errors.rules && (
            <span className="validation-error">
              Wymagana akceptacja regulaminu
            </span>
          )}
        </div>

        <button type="submit">zapisz</button>
      </form>
    </div>
  );
};

export default Form;
