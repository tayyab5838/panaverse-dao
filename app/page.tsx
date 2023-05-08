import CoreTracks from "./components/Sections/CoreTracks"
import Hero from "./components/Sections/Hero"
import { Inter } from 'next/font/google'
import SpecializedTracks from "./components/Sections/SpecializedTracks"
import OutCome from "./components/Sections/OutCome"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Hero/>
      {/* Core Tracks Section */}
      <CoreTracks/>
      {/* Specialized Tracks */}
      <SpecializedTracks/>
      {/* Program Outcome */}
      <OutCome/>
    </main>
  )
}
