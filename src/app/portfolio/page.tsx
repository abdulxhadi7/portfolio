import ScrollAnimation from "@/components/ScrollAnimation";

export default function Portfolio() {
  return (
    <div className="min-h-screen p-20 bg-black text-white space-y-16">
      <h1 className="text-5xl font-bold">My Work</h1>
      <ScrollAnimation />
      <ScrollAnimation />
      <ScrollAnimation />
    </div>
  );
}
