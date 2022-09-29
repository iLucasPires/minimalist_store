import image from "../../assets/images/img1.jpg";

export const Presentation = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-between bg-black text-white">
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-10">
        <h2 className="text-8xl font-black uppercase ">Do more with less</h2>
        <p className="text-justify text-2xl text-white">
          life is too short to do the same thing over and over again
        </p>
      </div>
      <img src={image} alt="" className="h-full w-2/5 object-cover p-10" />
    </section>
  );
};
