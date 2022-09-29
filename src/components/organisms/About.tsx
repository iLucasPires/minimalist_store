import image from "../../assets/images/img2.jpg";

export const About = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-between bg-white text-white">
      <img src={image} alt="" className="h-full w-2/5 object-cover p-10" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-10">
        <h2 className="text-8xl font-black uppercase text-black">About us</h2>
        <p className="text-justify text-2xl text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas, quod, quia, voluptates quae voluptatibus quibusdam
          voluptatum quidem quos quas natus. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae.
        </p>
        <button className="h-14 w-72 self-end bg-black text-white">
          Learn more
        </button>
      </div>
    </section>
  );
};
