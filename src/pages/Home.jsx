import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Experiences from '../components/Experiences'
import NatureSection from '../components/NatureSection'
import WhyRaw from '../components/WhyRaw'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import LiveFeed from '../components/LiveFeed'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <section id="about">
                <AboutSection />
            </section>
            <section id="experiences">
                <Experiences />
            </section>
            <NatureSection />
            <WhyRaw />
            <section id="reviews">
                <Testimonials />
            </section>
            <LiveFeed />
            <section id="contact">
                <ContactSection />
            </section>
            <Footer />
        </>
    )
}

export default Home
