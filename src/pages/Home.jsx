import React from 'react';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

function Home() {
    return (
        <div>
            <h1>Welcome to Our Construction Company</h1>
            <Services />
            <Projects />
            <Testimonials />
        </div>
    );
}

export default Home;
