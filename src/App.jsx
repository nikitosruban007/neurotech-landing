import "./App.css";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { GradeModules } from "./components/GradeModules.jsx";
import { Features } from "./components/Features.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <GradeModules />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
