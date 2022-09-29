import React from "react";
import { Button } from "../atom/Button";

export const Footer = () => {
  const [input, setInput] = React.useState("");

  return (
    <footer className="flex h-96 w-full  items-center justify-around gap-5 bg-black p-5 text-white">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-black uppercase ">About us</h1>
        <p className="w-96 text-sm font-black uppercase ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas voluptas quidem nesciunt. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas voluptas quidem nesciunt. Quisquam, quae.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-black uppercase ">Newsletter</h1>
        <p className="w-96 text-sm font-black uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas voluptas quidem nesciunt. Quisquam, quae.
        </p>
        <input
          type="text"
          className="h-10 w-80  p-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email"
        />
        <Button
          onClick={(e: any) => {
            e.preventDefault();
            setInput("");
          }}
          color="ligth"
          text="Subscribe"
        />
      </div>
    </footer>
  );
};
