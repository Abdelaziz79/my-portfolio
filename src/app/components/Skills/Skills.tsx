import skillsList from "./skillsList";
const Skills = () => {
  return (
    <>
      <div className=" py-10 mt-7 dark:text-white">
        <h3 className="text-3xl py-1">Skills</h3>
      </div>
      <div className=" grid justify-center grid-cols-2  md:grid-cols-6 lg:grid-cols-8 ">
        {skillsList.map((skill) => (
          <div
            key={skill.id}
            className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400 "
          >
            <div className="flex flex-col items-center ">
              <skill.icon />
              <p className="text-sm">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
