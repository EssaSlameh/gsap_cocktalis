import gsap from "gsap";
import {ScrollSmoother, SplitText} from "gsap/all";
import Navbar from "./components/Navbar.jsx";

gsap.registerPlugin(ScrollSmoother, SplitText);

const App = () => {
    return (
      <main>
          <Navbar />
      </main>
    )
}
export default App
