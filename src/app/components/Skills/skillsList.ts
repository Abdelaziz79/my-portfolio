import img2 from "@/app/assets/img/f1.jpg";
import img1 from "@/app/assets/img/f2.jpg";
type Skill = {
  id: number;
  img: any;
};
const skillsList: Skill[] = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
];

export default skillsList;
