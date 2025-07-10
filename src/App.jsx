import gsap from "gsap";
import {ScrollSmoother, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollSmoother, SplitText);

const App = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-3xl text-indigo-300">Hello!, Gsap</h1>
        </div>
    )
}
export default App
