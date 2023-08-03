import NavigationBar from '@/components/navigationBar'
import HeroSection from '@/components/hero'
import AboutUs from '@/components/aboutUs'
import MissionVision from '@/components/missionVision'
import CoreValues from '@/components/coreValues'
import Services from '@/components/services'
import Footer from '@/components/footer'
import WhyChooseUs from '@/components/whyChoose'
import ContactForm from '@/components/contact'

export default function Home() {
  return (
    <>
      <div className='scroll-smooth'>
      <NavigationBar />
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <MissionVision/>
      <CoreValues/>
      <WhyChooseUs/>
      <ContactForm/>
      <Footer/>
    </div>
    </>
  )
}
