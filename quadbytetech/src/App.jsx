import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Sidebar />
      <main className=" lg:ml-[280px]">
        <Home />
        <About />
        <WhatWeDo />
        <Service />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}


export default App;
