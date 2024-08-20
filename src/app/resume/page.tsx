import { MiniFooter } from "../components/Footer/Footer";
import { CarouselComp } from "../components/Skills/Skills";
import { certificateList } from "./certificateList";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="dark:text-white text-center">
        <h3 className="text-3xl mb-10">الشهادات الحاصل عليها</h3>
      </div>
      <div className="flex-grow">
        <div>
          <CarouselComp
            className="w-[90%] max-w-[1000px] overflow-hidden "
            list={certificateList}
          />
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Resume;
