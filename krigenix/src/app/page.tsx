import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Technologies } from "@/components/sections/technologies"
import { Services } from "@/components/sections/services"
import { WhyKrigenix } from "@/components/sections/why-krigenix"
import { Solutions } from "@/components/sections/solutions"
import { Process } from "@/components/sections/process"
import { Ecosystem } from "@/components/sections/ecosystem"
import { WhyChoose } from "@/components/sections/why-choose"
import { Industries } from "@/components/sections/industries"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <WhyKrigenix />
        <Solutions />
        <Process />
        <Ecosystem />
        <WhyChoose />
        <Industries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
