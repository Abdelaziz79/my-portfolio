import img1 from "@/app/assets/img/c1.jpg";
import img2 from "@/app/assets/img/c2.jpg";
import img3 from "@/app/assets/img/c3.jpg";
import img4 from "@/app/assets/img/c4.jpg";
import img5 from "@/app/assets/img/c5.jpg";
import img6 from "@/app/assets/img/c6.jpg";
import img7 from "@/app/assets/img/c7.jpg";
import img8 from "@/app/assets/img/c8.png";
import img9 from "@/app/assets/img/c9.png";

type Certificate = {
  id: number;
  img: string;
};

export const certificateList: Certificate[] = [
  { id: 1, img: img1.src },
  { id: 2, img: img2.src },
  { id: 3, img: img3.src },
  { id: 4, img: img4.src },
  { id: 5, img: img5.src },

  { id: 6, img: img6.src },
  { id: 7, img: img7.src },
  { id: 8, img: img8.src },
  { id: 9, img: img9.src },
];
