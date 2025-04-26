import React from "react";

const DescriptHero: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2E353E] flex flex-wrap items-center justify-center gap-2">
          
          <img
            src="/Welcome to bodimak.lk – Your Ultimate Room Renting Solution!.png"
            alt="bodimak.lk"
            className="h-10 md:h-34 inline-block align-middle"
            style={{ margin: "0 0.5rem" }}
            draggable={false}
          />
          
        </h1>
        <p className="mt-8 text-lg md:text-lg text-[#2E4750]">
          Looking for the perfect room to rent or need an efficient way to manage your rental properties? You’ve come to the right place!
        </p>
        <p className=" text-base md:text-lg text-[#2E4750]">
          At bodimak.lk, we simplify the entire process of finding, renting, and managing rooms. Whether you're a tenant looking for a new home, a property manager needing efficient tools, or an admin overseeing everything, our platform makes it easier for everyone.
        </p>
      </div>
    </section>
  );
};

export default DescriptHero;
