'use client'
import Hero from "./hero";
import About from "./about";
import Works from "./works";
import Advantages from "./advantages";
import Material from "./material";
import Contact from "./contact";
import Partners from "./partners";
import Services from "./services";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeSections = () => {

	useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);

	return (
		<div>
			<Hero />
			<Services />
			<About />
			<Works />
			<Partners />
			<Advantages />
			<Material />
			<Contact />
		</div>
	);
};

export default HomeSections;

 