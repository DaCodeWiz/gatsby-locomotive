import './shared.css'
import './fonts.css'
import { useEffect } from "react"
import Lenis from '@studio-freight/lenis'
import Home from "./Components/Home/Home"
// import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
// import CursorIcon from './Components/CursorIcon/CursorIcon'

export default function App() {

  // const [loadingVisible, setLoadingVisible] = useState(true)

  //Create cursor icon
  // useEffect(() => { new CursorIcon() }, [])

  /**
   * Smooth scroll
   * and unlock scrolling after loading is complete
   */
  useEffect(() => {
    setTimeout(() => {
      const lenis = new Lenis({
        lerp: .1,
        smooth: true,
      })
      const scrollFn = () => {
        lenis.raf()
        requestAnimationFrame(scrollFn)
      }
      requestAnimationFrame(scrollFn)
    }, 3800)
  }, [])

  return (
    <div className="center column">
       {/*{loadingVisible ? <LoadingScreen setLoadingVisible={setLoadingVisible} /> : null}*/}
      <Home />
    </div>
  )
}