import { ReactElement, ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useAddExperiencesMutation } from "../../services/experiences/experiencesApi";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../../services/users/usersApi";
import {
  setFormEmpty,
  setError,
  setRegisterForm,
} from "../../services/users/usersSlice";
import { ParamExperienceType } from "../../types/experiencesType";
import { saveCookie } from "../../utils/util";
import RegisterInput from "./components/RegisterInput";

const Register = (): ReactElement => {
  const data = useAppSelector((state) => state.users.data.register);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [, setCookie] = useCookies(["access_token"]);

  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [addExperiences] = useAddExperiencesMutation();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidation();

    const experiencesArray: ParamExperienceType[] = [];
    if (data.experiences) {
      const rows = data.experiences.split("\n");

      rows.map((row) => {
        const [company, title, interval] = row.split(";");

        if (company && title && interval) {
          experiencesArray.push({ company, title, interval });
        }
      });
    }

    if (data.fullname && data.email && data.password && data.password_again) {
      const { fullname, email, password, role } = data;
      const res = await registerUser({ fullname, email, password, role });

      if (res.data) {
        const response = await loginUser({
          email,
          password,
          strategy: "local",
        });

        if (!response.error) {
          saveCookie(response, setCookie);

          if (experiencesArray && response.data?.accessToken) {
            addExperiences({
              token: response.data.accessToken,
              body: experiencesArray,
            });
          }
        }
      }

      dispatch(setFormEmpty());
      navigate("/");
    }
  };

  const handleValidation = () => {
    if (!data.fullname) {
      dispatch(
        setError({ name: "fullname", value: "A mező kitöltése kötelező!" })
      );
    } else {
      dispatch(setError({ name: "fullname", value: "" }));
    }

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

    if (!data.password_again) {
      dispatch(
        setError({
          name: "password_again",
          value: "A mező kitöltése kötelező!",
        })
      );
    } else {
      if (data.password !== data.password_again) {
        dispatch(
          setError({
            name: "password",
            value: "A jelszavaknak meg kell egyeznie!",
          })
        );
        dispatch(
          setError({
            name: "password_again",
            value: "A jelszavaknak meg kell egyeznie!",
          })
        );
      } else {
        dispatch(
          setError({
            name: "password",
            value: "",
          })
        );
        dispatch(
          setError({
            name: "password_again",
            value: "",
          })
        );
      }
    }
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
          <RegisterInput
            _for="fullname"
            title="Név"
            name="fullname"
            type="text"
          />
          <RegisterInput _for="email" title="E-mail" name="email" type="text" />
          <RegisterInput
            _for="password"
            title="Jelszó"
            name="password"
            type="password"
          />
          <RegisterInput
            _for="password_again"
            title="Jelszó újra"
            name="password_again"
            type="password"
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
          {data.role === "jobseeker" && (
            <textarea
              name="experiences"
              id="experiences"
              className="text-sm p-2 w-min-[16rem] w-[18rem] max-w-[20rem] min-h-20 max-h-52 border border-sky-700 border-opacity-80 rounded-lg mb-4 "
              value={data?.expreriences}
              onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
                dispatch(
                  setRegisterForm({
                    name: "experiences",
                    value: e.target.value,
                  })
                )
              }
            ></textarea>
          )}

          <button className="bg-sky-500 w-[10rem] h-10 text-white rounded-lg hover:bg-sky-600 focus:bg-sky-600 cursor-pointer">
            Regisztráció
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
