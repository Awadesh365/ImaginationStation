import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Pojects</h1>
      <p className="text-md text-gray-500">
        Imagination Station is an open-source project, By which people can share
        their thoughts, ideas, and experiences.
      </p>
      <CallToAction />
    </div>
  );
}
