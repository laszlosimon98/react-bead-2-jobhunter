import { ReactElement, useState } from "react";
import { applicantsModalOff } from "../../../../services/utils/visibilitySlice";
import { useCookies } from "react-cookie";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { useGetApplicantsForAJobQuery } from "../../../../services/applicants/applicantsApi";
import Loading from "../../../components/Loading";

const ApplicantsModal = (): ReactElement => {
  const location = useLocation();
  const { jobId } = useParams();
  const [cookies] = useCookies(["access_token"]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCloseAble, setIsCloseAble] = useState<boolean>(true);

  const token = cookies?.access_token?.token;

  const { data: applicants, isLoading: isApplicantsLoading } =
    useGetApplicantsForAJobQuery(
      { token, jobId: parseInt(jobId as string) },
      { skip: jobId === undefined }
    );

  const handleClose = () => {
    let path = "/";
    if (location.pathname.includes("profile")) {
      path = "/profile";
    }

    if (isCloseAble) {
      dispatch(applicantsModalOff());
      navigate(path);
    }
  };

  if (isApplicantsLoading) return <Loading />;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pb-4 ">
        <div
          onMouseEnter={() => setIsCloseAble(false)}
          onMouseLeave={() => setIsCloseAble(true)}
          className="border w-jobModal h-[29rem] py-3 shadow-lg bg-white rounded-lg overflow-y-scroll"
        >
          <h3 className="text-center text-2xl font-bold opacity-60 mt-3">
            Jelentkezők
          </h3>
          <table className="w-table mx-auto table-auto text-center">
            <tbody>
              {applicants?.map((applicant, idx) => (
                <tr key={idx} className="bg-sky-50">
                  <td className="pl-8 py-6 font-semibold opacity-80">Név</td>
                  <td className="pl-8 py-6">{applicant.user.fullname}</td>
                  <td className="pl-8 py-6 font-semibold opacity-80">E-mail</td>
                  <td className="pl-8 py-6">{applicant.user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsModal;
