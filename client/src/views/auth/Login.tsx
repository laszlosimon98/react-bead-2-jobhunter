import { ChangeEvent, ReactElement, useState } from "react";
import { useLoginUserMutation } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { login } from "../../services/auth/authSlice";
import {
  setError,
  setFormEmpty,
  setLoginForm,
} from "../../services/form/formSlice";

const Login = (): ReactElement => {
  const { login: data, errors } = useAppSelector((state) => state.form.data);

  const dispatch = useAppDispatch();

  const [loginUser, { isError }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginForm({ name: e.target.name, value: e.target.value }));
  };

  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidation();

    const auth = async () => {
      const response = await loginUser({ ...data, strategy: "local" });

      if (!response.error) {
        dispatch(login(response.data.user));
        dispatch(setFormEmpty());
        navigate("/");
      }
    };

    if (data.email && data.password) {
      auth();
    }
  };

  const handleValidation = () => {
    if (!data.email) {
      dispatch(
        setError({ name: "email", value: "A mező kitöltése kötelező!" })
      );
    } else {
      dispatch(setError({ name: "email", value: "" }));
    }

    if (!data.password) {
      dispatch(
        setError({ name: "password", value: "A mező kitöltése kötelező!" })
      );
    } else {
      dispatch(setError({ name: "password", value: "" }));
    }
  };

  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Bejelentkezés</h2>
      </div>

      <div className="w-full h-[50vh] flex flex-col justify-center items-center">
        {isError && (
          <p className="text-red-600 text-sm">Hibás e-mail cím vagy jelszó</p>
        )}
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleLogin}
        >
          <label htmlFor="email" className="self-start text-xl">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={`p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1 ${
              isError || errors.email ? "border border-red-600" : ""
            }`}
            onInput={handleInput}
            value={data["email"]}
          />
          {errors.email && (
            <p className="text-sm text-red-600 self-end -mt-6">
              {errors.email}
            </p>
          )}

          <label htmlFor="password" className="self-start text-xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1 ${
              isError || errors.password ? "border border-red-600" : ""
            }`}
            onInput={handleInput}
            value={data["password"]}
          />
          {errors.password && (
            <p className="text-sm text-red-600 self-end -mt-6 mb-2">
              {errors.password}
            </p>
          )}

          <button className="bg-sky-500 w-[10rem] h-10 text-white rounded-lg hover:bg-sky-600 cursor-pointer">
            Bejelentkezés
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
