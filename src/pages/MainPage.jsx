import { AboutImage } from "../../components/AboutImage.jsx";
import "../App.css";
import "../index.css";
import { MyButton } from "../../components/MyButton.jsx";

export function MainPage() {
  return (
    <div name="home">
      <main>
        <header className="bg-blue-clean/[0.7] text-white py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40">
          <div className="flex flex-grow basis-0">
            <a href="./">
              <img className="h-16 aspect-square" src="/logo.jpg" alt="MyMoon Customs" />
            </a>
          </div>

          <nav className="items-center justify-content hidden xl:block sm:hidden">
            <ul className="flex text-sm basis-0 items-center [&>li>a]:items-center [&>li>a]:px-4 [&>li>a]:py-2">
              <li>
                <a href="">Chaquetas</a>
              </li>
              <li>
                <a href="">Zapatillas</a>
              </li>
              <li>
                <a href="">Sudaderas</a>
              </li>
              <li>
                <a href="">Camisetas</a>
              </li>
              <li>
                <a href="">Pantalones</a>
              </li>
            </ul>
          </nav>
          <nav className="flex flex-grow justify-end basis-0">
            <ul className="flex items-center  text-sm basis-0 [&>li>a]:font-bold [&>li>a]:inline-block [&>li>a]:text-center [&>li>a]:px-4 [&>li>a]:py-2">
              <li>
                <a href="">Nuestros trabajos</a>
              </li>
              <li>
                <a href="">Sobre nosotros</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="h-full w-screen text-center relative overflow-hidden">
          <div className="z-40 relative flex items-center justify-center h-screen">
          <h2 className="border-[2px] border-indigo-900 rounded text-dark-blue text-6xl font-sans relative bg-yellow-moon/90 ">
            My Moon Customs
            <p className="text-indigo-900 text-3xl font-sans relative">
            Customización de tus prendas favoritas
          </p>
          </h2>
          </div>
          <div className="hidden xl:block sm:hidden absolute top-0 bottom-0 grid-cols-3">
            <img className="w-screen object-center" src="./extremoduro.jpg"></img>
          </div>
          <div className="hidden sm:block xl:hidden absolute top-0 bottom-0 grid-cols-3">
            <video className="w-screen object-center" src="./mareavideo.mp4" autoPlay loop muted></video>
          </div>
        </section>
      </main>
    </div>
  );
}
export default MainPage;
