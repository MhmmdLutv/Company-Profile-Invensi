import { Navbar } from "./component/Navbar"
import { Footer } from "./component/Footer"

import { Contact } from "./component/Contact"

import { HomePage } from "./pages/HomePage"

function App() {
    return <div>
      
    {/* Navbar */}
    <Navbar/>

    {/* content */}
    <HomePage/>

    {/* Contact */}
    <Contact/>

    {/* footer */}
    <Footer/>  

    </div>
}

export default App
