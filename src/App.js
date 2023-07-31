
import React from 'react';
import './App.css';
import { Navbar, CTA, Artical } from './components';
import { Header, Skills, About, Comment, Footer, Portfolio } from './container'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
            </div>
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <CTA />
            <Comment />
            <Footer />
        </div>
    )
}

export default App


