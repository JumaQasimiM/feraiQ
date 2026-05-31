import Hero from "../components/Hero";
import logo from "../assets/logo.png";

export const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-4 space-y-10 bg-cover bg-center my-10 z-10 text-black">
        {Array.from({ length: 12 }, (_, index) => (
          <h1 key={index} className="text-2xl font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore
            accusamus esse cum, odio id harum accusantium asperiores commodi,
            repellendus error animi quo, molestias cumque architecto. Assumenda,
            dolor. Quam, quibusdam?
          </h1>
        ))}
      </section>
    </>
  );
};
