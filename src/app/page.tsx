"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { StarTrail } from "@/components/StarTrail";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <StarTrail />
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)",
        }}
      >
        <Header />
        <div className="h-screen flex flex-col items-center justify-center gap-y-10">
          <div className="min-w-48 p-2">
            <h1 className="text-center uppercase text-3xl sm:text-6xl">
              Let&apos;s make something creative
            </h1>
          </div>

          <div className="h-20 flex gap-4 justify-around flex-wrap">
            <Button
              size={"xl"}
              variant={"outline"}
              className="min-w-48 rounded-3xl"
            >
              Let&apos;s Talk
            </Button>
            <Button
              size={"xl"}
              variant={"default"}
              className="min-w-48 rounded-3xl"
            >
              <Link
                href={"https://www.allanahassan.com"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
