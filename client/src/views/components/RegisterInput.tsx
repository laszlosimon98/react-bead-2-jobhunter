import { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setRegisterForm } from "../../services/auth/authSlice";

type RegisterPropsType = {
  _for: string;
  title: string;
  name: string;
  type: string;
};

const RegisterInput = ({
  _for,
  title,
  name,
  type,
}: RegisterPropsType): ReactElement => {
  const { register: data, errors } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegisterForm({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <label htmlFor={_for} className="self-start text-xl">
        {title}
      </label>
      <input
        type={type}
        id={_for}
        name={_for}
        className={`p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1 ${
          errors[name as string] ? "border border-red-600" : ""
        }`}
        value={data[name as string]}
        onInput={handleInput}
      />
      {errors[name as string] && (
        <p className="text-sm text-red-600 self-end -mt-6">
          {errors[name as string]}
        </p>
      )}
    </>
  );
};

export default RegisterInput;
