import Hero from '@/components/sections/Hero';
import Slider from '@/components/sections/Slider';
import Bento from '@/components/sections/Bento';
import Info from '@/components/sections/Info';
import Separator from '@/components/sections/Separator';

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <Bento />
      <Info />
      <Separator />
    </main>
  );
}
