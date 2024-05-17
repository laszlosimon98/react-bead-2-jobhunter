import { ReactElement } from "react";

const Login = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Bejelentkezés</h2>
      </div>

      <div className="w-full h-[50vh] flex justify-center items-center">
        <form className="flex flex-col justify-center items-center">
          <label htmlFor="email" className="self-start text-xl">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1"
          />

          <label htmlFor="password" className="self-start text-xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1"
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
