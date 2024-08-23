import { MiniFooter } from "@/app/components/Footer/Footer";
import MyButton from "@/app/components/MyButton";
import { getBlogById } from "@/app/services/blogs";
import Link from "next/link";
import Markdown from "react-markdown";

type Props = {
  params: { id: string };
};

function formatTimestamp(timestamp: string) {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);

  // Get the individual components of the date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Format the date and time into a readable string
  return `${year}-${month}-${day} `;
}

export default async function Blog({ params }: Props) {
  const blog = await getBlogById(params.id);
  return blog ? (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="rounded-md shadow-md duration-300 transform  hover:shadow-xl my-2 bg-gray-100 dark:text-white dark:bg-gray-800 p-6">
          <div className="mb-10">
            <h3 className="text-3xl ">{blog.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ">
              {formatTimestamp(blog.created_at)}
            </p>
          </div>
          <Markdown className="text-xl">{blog.description}</Markdown>
          <div className="flex justify-center gap-3 mt-5">
            <Link href="/blogs">
              <MyButton>اقرا المزيد</MyButton>
            </Link>
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  ) : null;
}
