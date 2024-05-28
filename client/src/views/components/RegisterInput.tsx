import { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setRegisterForm } from "../../services/form/formSlice";

type RegisterPropsType = {
  _for: string;
  title: string;
  name: string;
};

const RegisterInput = ({
  _for,
  title,
  name,
}: RegisterPropsType): ReactElement => {
  const data = useAppSelector((state) => state.form.data.register);
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
        type="text"
        id={_for}
        name={_for}
        className="p-2 w-[16rem] rounded-lg border outline-none mb-5 mt-1"
        value={data[name as string]}
        onInput={handleInput}
      />
    </>
  );
};

export default RegisterInput;
