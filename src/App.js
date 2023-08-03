
import React from 'react';
import './App.css';
import { Navbar, CTA, Artical } from './components';
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
            <Skills />
            <CTA />
            <Portfolio />
            <Achievement />
            <Comment />
            <Footer />
        </div>
    )
}

export default App


