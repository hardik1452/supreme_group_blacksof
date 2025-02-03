import { useState } from "react";
import { PlayArrow, Pause } from "@mui/icons-material";

const Evolution = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Passenger vehicles"); //making passenger as default state
  const [isPlaying, setIsPlaying] = useState(true); //state of play button
  const [selectedPart, setSeclectedPart] = useState("Complete body"); //making complete body as default state body part
  // Category Array
  const vehicleCategories = [
    {
      name: "Passenger vehicles",
      description: "Revving up innovation from interior to exterior.",
      id: "Passenger",
    },
    {
      name: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles.",
      id: "Commercial",
    },
  ];
// Parts Array
  const vehicleParts = [
    {
      name: "Passenger vehicles",
      categories: ["Complete body", "Front", "Cabin", "Trunk", "Exterior"],
    },
    {
      name: "Commercial vehicles",
      categories: ["Complete body", "Engine", "Cabin"],
    },
  ];
  return (
    <div className="w-full pb-12 bg-black text-white font-primary flex flex-col items-center justify-center p-2">
      {/* Heading */}
      <div className="w-full max-sm:p-2">
        <h2 className="text-4xl mb-4 py-2 mt-24 text-center leading-12">
          Evolving the drive with
          <span className="font-bold"> 360-degree</span>
          <br /> comprehensive solutions
        </h2>
      </div>
      {/* Div which is divided into 2 parts left (1/3) and right(2/3) */}
      <div className="w-full flex justify-center items-center max-sm:flex max-sm:flex-col-reverse max-md:flex max-md:flex-col-reverse">
        {/* Left Section - Vehicle Categories */}
        <div className="lg:w-1/3 w-full p-6 max-sm:flex max-md:w-full max-md:flex">
          {/* Mapping each category with its description */}
          {vehicleCategories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer my-4 p-2 lg:px-12 lg:py-12 lg:border-l-2 transition-all max-md:w-1/2 text-center ${
                selectedCategory === category.name
                  ? "border-white text-white"
                  : "border-gray-700 text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-sm max-sm:hidden max-md:hidden">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section - Vehicle View which will display the details of selected vehicle's selected body part*/}
        <div className="lg:w-2/3 w-full  items-center justify-center relative">
          <div className="w-full h-full py-32 px-22 text-center justify-center items-center">
            <span>{selectedPart}</span>
          </div>
        </div>
      </div>
      <div className="w-full mr-12 flex justify-end items-center">
        {/* Bottom Vehicle Parts Menu to display the parts with highlighted color  */}
        <div className="flex gap-6 mt-4 lg:mt-0 overflow-y-auto no-scrollbar max-sm:mx-6 max-md:px-6">
          {vehicleParts.map((part) => (
            <div
              key={part.name}
              className="flex gap-2 items-center text-sm mr-3"
            >
              {selectedCategory === part.name
                ? part.categories.map((item) => (
                    <p
                      className={`mr-12 px-4 py-2 hover:cursor-pointer
                        ${
                          selectedPart === item
                            ? "text-white font-semibold"
                            : "text-gray-500"
                        }`}
                      key={item}
                      onClick={() => setSeclectedPart(item)}
                    >
                      {item}
                    </p>
                  ))
                : null}
            </div>
          ))}
        </div>
        {/* Play/Pause Button */}
        <button
          className="relative bottom-10 bg-white text-black p-3 rounded-full shadow-lg max-sm:hidden max-md:hidden"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause sx={{ width: 24, height: 24 }} />
          ) : (
            <PlayArrow sx={{ width: 24, height: 24 }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Evolution;
