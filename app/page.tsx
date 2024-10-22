import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const Home =() => {
  return (
    <div>
      <Header />
      <Hero />
        <section>
        <div className="mt-16 py-16 border-x-4 border-y-4 bg-stone-500 border-yellow-900">
          <h1 className="font-bold p-3 text-3xl text-center">My Skills</h1>
          <h1 className="text-center">HTML</h1>
          <h1 className="text-center">CSS</h1>
          <h1 className="text-center">Javascript</h1>
          <h1 className="text-center">Typescript</h1>
          <h1 className="text-center">Next js</h1>
          <h1 className="text-center">Node</h1>
        </div>
        </section>

        <div className="text-center">
           <h2 className="p-3 text-3xl">About Me</h2>
          <p className="text-center font-bold">
            This is about page
          </p>
        </div>

        <div>
           <h2 className="p-3 text-3xl text-center">Contact Me</h2>
           <p className="p-3 font-bold text-center">bilalabid6578@gmail.com</p>
        </div>
        <div className="text-center rounded-xl">
            <button className="px-2 py-2 border border-black text-black-500 hover:bg-slat-950 hover:text-white">
                 SIGN UP
            </button>
        </div>

      <Footer />
    </div>
  )
};
export default Home