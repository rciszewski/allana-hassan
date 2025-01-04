import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-screen h-screen flex flex-col items-center justify-center gap-y-10"
        style={{
          background:
            "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)",
        }}
      >
        <div className="min-w-48 p-2">
          <h1 className="text-center uppercase text-3xl sm:text-6xl">
            Let&apos;s make something creative
          </h1>
        </div>

        <div className="h-20 flex gap-4 justify-around flex-wrap">
          <Button size={"xl"} variant={"outline"} className="min-w-48 rounded-3xl">
            Let&apos;s Talk
          </Button>
          <Button size={"xl"} variant={"default"} className="min-w-48 rounded-3xl">
            Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
