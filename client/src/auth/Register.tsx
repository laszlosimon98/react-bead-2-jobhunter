import { ReactElement } from "react";

const Register = (): ReactElement => {
  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Regisztráció</h2>
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
            className="p-2 w-[16rem] rounded-lg border outline-none mt-1"
          />

          <div className="w-full flex justify-between items-center my-7">
            <label htmlFor="employee">
              <input
                type="radio"
                className="mr-2"
                id="employee"
                name="role"
                checked
              />
              Munkavállaló
            </label>
            <label htmlFor="company">
              <input type="radio" className="mr-2" id="company" name="role" />
              Munkáltató
            </label>
          </div>

          <button className="bg-sky-500 w-[10rem] h-10 text-white rounded-lg hover:bg-sky-600 focus:bg-sky-600 cursor-pointer">
            Regisztráció
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
