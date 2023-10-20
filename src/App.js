
import React from 'react';
import './App.css';
import { Navbar, CTA } from './components';
import { Header, Skills, About, Comment, Footer, Portfolio, Achievement } from './container'
const App = () => {
    return (
        <div className='App'>
            <div>
                <Navbar />
            </div>
            <div className='bg_about'>
                <Header />
                <About />
            </div>
            <div className='section__padding'>
                <Skills />
                <CTA />
                <Portfolio />
                <Achievement />
                <Comment />
            </div>
            <Footer />
        </div>
    )
}

export default App


