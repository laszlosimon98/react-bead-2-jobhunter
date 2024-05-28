import { ChangeEvent, ReactElement } from "react";
import { useLoginUserMutation } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { login } from "../../services/auth/authSlice";
import { setFormEmpty, setLoginForm } from "../../services/form/formSlice";

const Login = (): ReactElement => {
  const data = useAppSelector((state) => state.form.data.login);
  const dispatch = useAppDispatch();

  const [loginUser, { isError }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginForm({ name: e.target.name, value: e.target.value }));
  };

  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = async () => {
      const response = await loginUser({ ...data, strategy: "local" });

      if (!response.error) {
        dispatch(login(response.data.user));
        dispatch(setFormEmpty());
        navigate("/");
      }
    };

    auth();
  };

  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Bejelentkezés</h2>
      </div>

      <div className="w-full h-[50vh] flex flex-col justify-center items-center">
        {isError && (
          <p className="text-red-600">Hibás e-mail cím vagy jelszó</p>
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
              isError ? "border border-red-600" : ""
            }`}
            onInput={handleInput}
            value={data["email"]}
          />

          <label htmlFor="password" className="self-start text-xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1 ${
              isError ? "border border-red-600" : ""
            }`}
            onInput={handleInput}
            value={data["password"]}
          />

          <button className="bg-sky-500 w-[10rem] h-10 text-white rounded-lg hover:bg-sky-600 focus:bg-sky-600 cursor-pointer">
            Bejelentkezés
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
