import { ReactElement, useEffect } from "react";
import AdvertisementForm from "./AdvertisementForm";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  useGetJobByIdWithAuthQuery,
  useModifyJobMutation,
} from "../../../../services/jobs/jobsApi";
import { setJob } from "../../../../services/jobs/jobsSlice";
import Loading from "../../../components/Loading";
import PageTitle from "../../../home/components/PageTitle";

const ModifyAdvertisement = (): ReactElement => {
  const navigate = useNavigate();

  const { advertisementId: id } = useParams();
  const [cookies] = useCookies(["access_token"]);
  const token = cookies.access_token.token;

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetJobByIdWithAuthQuery(
    { id: parseInt(id as string), token },
    { skip: id === undefined }
  );

  const {
    company,
    position,
    type,
    description,
    city,
    homeOffice,
    salaryFrom,
    salaryTo,
  } = useAppSelector((state) => state.jobs.data.advertisement);

  const [modifyJob] = useModifyJobMutation();

  useEffect(() => {
    if (data) {
      dispatch(setJob(data));
    }
  }, [data, dispatch]);

  const handleSave = () => {
    if (
      company &&
      position &&
      type &&
      description &&
      city &&
      homeOffice !== undefined &&
      salaryFrom &&
      salaryTo
    ) {
      modifyJob({
        id: parseInt(id as string),
        token,
        company,
        position,
        type,
        description,
        city,
        homeOffice: homeOffice ? true : false,
        salaryFrom: parseInt(salaryFrom.toString()),
        salaryTo: parseInt(salaryTo.toString()),
      });
    }
    navigate("/profile");
  };

  return (
    <>
      {isLoading && <Loading />}
      <PageTitle>{data?.company}</PageTitle>

      <div className="pt-10">
        <AdvertisementForm />
      </div>

      <div className="flex justify-evenly items-center mt-10 pb-10">
        <button
          onClick={handleSave}
          className="border bg-sky-500 cursor-pointer w-52 h-12 rounded-lg hover:bg-sky-600 text-lg transition-all text-white shadow-md"
        >
          Hirdetés módosítása
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="border bg-red-500 cursor-pointer w-24 h-12 rounded-lg hover:bg-red-600 text-lg transition-all text-white shadow-md"
        >
          Mégsem
        </button>
      </div>
    </>
  );
};

export default ModifyAdvertisement;
