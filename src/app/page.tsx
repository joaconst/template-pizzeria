import Hero from '@/components/sections/Hero';
import Drinks from '@/components/sections/Drinks';
import Bento from '@/components/sections/Bento';
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
