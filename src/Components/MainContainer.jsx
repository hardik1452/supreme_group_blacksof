
const MainContainer = () => {
  return (
    <div
      className="w-full font-primary h-dvh oveflow-hidden flex flex-col items-center justify-center bg-[#00000099]" id="maindiv"
    >
      <div className="relative z-10 bg-opacity-50 text-center grid gap-2 text-white lg:mx-auto">
        <p className="font-light block text-2xl pt-2 pb-3">
          Driven by performance
        </p>
        <h2 className="text-5xl">
          <span className="font-semibold pb-2">
            Soft trims and
            <span className="text-primary"> NVH solutions</span>
          </span>
          <br />
          for seamless rides
        </h2>
      </div>
    </div>
  );
};

export default MainContainer;
