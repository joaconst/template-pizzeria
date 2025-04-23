import Hero from '@/components/sections/Hero';
import Slider from '@/components/sections/Slider';
import Drinks from '@/components/sections/Drinks';
import Bento from '@/components/sections/Bento';
import Info from '@/components/sections/Info';
import Separator from '@/components/sections/Separator';

export default function Home() {
  return (
    <main>
      <Hero />
      <Drinks />
      <Bento />
      <Separator />
    </main>
  );
}
