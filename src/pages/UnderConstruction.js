import { useTranslation } from "react-i18next";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <div className="construction__wrapper">
      <h2>{t("under-construction-header")}</h2>
    </div>
  );
};

export default UnderConstruction;
