import React,{useState, useEffect} from 'react'
import '../../App.scss';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Loader from '../Loader';


function Home() {
    useEffect(() => {
        document.title = "Lanka Travel Diaries";
      }, []);
    const [open, setOpen] = useState(true);

    useEffect(()=>{
        setInterval(() => {
            if (document.readyState === 'complete') {
                setOpen(false);
            }
            }, 100);
    },[])
    

    return (
        <>
        {open===true ? <Loader open/>: <Loader />}
            <HeroSection/>
            <Cards/>
            
        </>
    )
}

export default Home
