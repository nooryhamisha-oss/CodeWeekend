import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Header
        name="Hamisha Noori"
        message="Welcome to my developer portfolio 🚀"
      />

      <Profile
        name="Hamisha Noori"
        image="profile"
        title="Frontend Developer"
        bio="I am learning React step by step and building real projects."
      />

      <About />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;