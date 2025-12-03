import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Squad from '@/components/sections/Squad';
import WorkflowDiagram from '@/components/ui/WorkflowDiagram';
import TrackRecord from '@/components/sections/TrackRecord';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <Squad />
      <WorkflowDiagram />
      <TrackRecord />
      <Services />
      <Contact />
    </main>
  );
}
