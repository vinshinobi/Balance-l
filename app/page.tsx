import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specials from '@/components/Specials'
import Menu from '@/components/Menu'
import Hours from '@/components/Hours'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Specials />
        <Menu />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
