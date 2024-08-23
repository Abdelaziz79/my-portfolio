import React from "react";
import { MiniFooter } from "../components/Footer/Footer";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MyButton from "../components/MyButton";

type Props = {};

export default function Blogs({}: Props) {
  const blogs = [
    {
      id: 1,
      title: "التخسيس عن طريق الاكل",
      description: "Description 1",
    },
    {
      id: 2,
      title: "التطويل عن طريق العقلة",
      description: "Description 2",
    },
    {
      id: 3,
      title: "الصحة السليمة",
      description: "Description 3",
    },
    {
      id: 4,
      title: "في العقل السليم",
      description: "Description 4",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen ">
      <div className=" py-5  dark:text-white">
        <h3 className="text-3xl py-1">المدونة</h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
          هذه المدونة تحتوي على مقالات عن العلاج الطبيعي و الحجامة
        </p>
      </div>
      <div className="flex-grow">
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="my-2">{blog.title}</CardTitle>
                  <div>
                    <MyButton>
                      <Link href={`/blogs/${blog.id}`}>قراء المقال</Link>
                    </MyButton>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <MiniFooter />
    </div>
  );
}
