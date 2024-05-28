import { ChangeEvent, ReactElement } from "react";
import RegisterInput from "../components/RegisterInput";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFormEmpty, setRegisterForm } from "../../services/form/formSlice";
import { useRegisterUserMutation } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";

const Register = (): ReactElement => {
  const data = useAppSelector((state) => state.form.data.register);
  const dispatch = useAppDispatch();

  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* Validation */

    const { fullname, email, password, role } = data;
    registerUser({ fullname, email, password, role });

    dispatch(setFormEmpty());
    navigate("/login");
  };

  return (
    <>
      <div className="w-full shadow-lg h-16 flex justify-center items-center">
        <h2 className="font-bold text-3xl px-7 text-sky-600">Regisztráció</h2>
      </div>

      <div className="w-full h-[40rem] flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <RegisterInput _for="fullname" title="Név" name="fullname" />
          <RegisterInput _for="email" title="E-mail" name="email" />
          <RegisterInput _for="password" title="Jelszó" name="password" />
          <RegisterInput
            _for="password_again"
            title="Jelszó újra"
            name="password_again"
          />

          <div className="w-full flex justify-between items-center my-7">
            <label htmlFor="jobseeker">
              <input
                type="radio"
                className="mr-2"
                id="jobseeker"
                name="role"
                checked={data.role === "jobseeker"}
                onChange={() =>
                  dispatch(
                    setRegisterForm({ name: "role", value: "jobseeker" })
                  )
                }
              />
              Munkavállaló
            </label>
            <label htmlFor="company">
              <input
                type="radio"
                className="mr-2"
                id="company"
                name="role"
                checked={data.role === "company"}
                onChange={() =>
                  dispatch(setRegisterForm({ name: "role", value: "company" }))
                }
              />
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
