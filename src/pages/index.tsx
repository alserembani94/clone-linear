import Button from "@/components/atom/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!titleRef.current) {
          return;
        }

        if (entry.isIntersecting) {
          titleRef.current.style.top = "0px";
        } else {
          titleRef.current.style.top = "100px";
        }
      },
      {
        root: null,
        rootMargin: "-100px",
        threshold: 0.5,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      titleRef.current !== null && observer.unobserve(titleRef?.current);
    };
  }, []);

  return (
    <DefaultLayout>
      <section className="bg-gradient-section flex flex-col justify-center items-center pt-10 max-w-screen-xl">
        <Button href="/somewhere">
          Linear x Figma Plugin
          <div>→</div>
        </Button>
        <h1 className="text-center my-8">
          Linear is a better way
          <br />
          to build products
        </h1>
        <h4 className="text-center">
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </h4>

        <Link
          href="/get-started"
          className="bg-slate-400 px-6 py-3 rounded-full bg-radial-linear mt-8 hover:shadow-slate-100"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full pt-20 flex justify-center bg-gradient-section-2">
        <div className="grid grid-cols-3 grid-rows-2 w-full max-w-screen-xl gap-4">
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
        </div>
      </section>

      <section className="w-full pt-20 flex justify-center bg-gradient-section-2">
        <div className="grid grid-cols-3 grid-rows-2 w-full max-w-screen-xl gap-4">
          <h1
            ref={titleRef}
            className="relative transition-all ease-in-out duration-300"
          >
            Aun cak!
          </h1>
          <p>
            {new Intl.NumberFormat("en-MY", {
              style: "currency",
              currency: "MYR",
              minimumFractionDigits: 0,
            }).format(20)}
          </p>
        </div>
      </section>
      <section className="w-full pt-20 flex justify-center bg-gradient-section-2">
        <div className="grid grid-cols-3 grid-rows-2 w-full max-w-screen-xl gap-4">
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
        </div>
      </section>
      <section className="w-full pt-20 flex justify-center bg-gradient-section-2">
        <div className="grid grid-cols-3 grid-rows-2 w-full max-w-screen-xl gap-4">
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-1 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
          <div className="col-span-2 rounded-[60px] border border-[#3333336A] bg-gradient-to-b from-[#44444400] to-[#44444456] h-[500px]"></div>
        </div>
      </section>
    </DefaultLayout>
  );
}
