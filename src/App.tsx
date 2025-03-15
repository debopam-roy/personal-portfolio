import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className={`flex flex-col`}>
            <Navbar />
            <Dashboard />
            <About />
            <Work />
            <Services />
            <Contact />
        </div>
    );
};

export default App;
