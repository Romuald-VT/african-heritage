
import { servicesData } from "@/lib/assets/data";
import CulturalExpertise from "../Share/CulturalExpertize";

const HomeUiTwo = () => {
  return (
    <>
        <CulturalExpertise heading="Nos Services" services={servicesData} />
    </>
  );
};

export default HomeUiTwo;
