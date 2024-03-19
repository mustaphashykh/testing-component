import { Footer, Header } from "./components/common"
import { DisplayCard } from "./components/extras"

function App() {
  return (
    <>
      <Header />
      <div className="w-[95%] md:w-[91%] 2xl:w-[1200px] mx-auto">
        <DisplayCard />
        <Footer icons={["fa-brands fa-instagram", "fa-brands fa-facebook-f", "fa-brands fa-twitter", "fa-brands fa-linkedin-in"]} />
      </div>
    </>
  )
}

export default App
