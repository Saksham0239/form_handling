import OtherDetails from "./OtherDetails/OtherDetails";
import BasicDetails from "./BasicDetails.jsx/BasicDetails";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";

const HomePage = () => {
  return (
    <div className="form-container">
      <BasicDetails />
      <OtherDetails />
      <TermsAndConditions />
    </div>
  );
};

export default HomePage;
