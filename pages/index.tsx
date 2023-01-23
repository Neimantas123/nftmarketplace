import BaseLayout from '@/components/layout/BaseLayout';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <BaseLayout>
      <div>Hello world</div>
    </BaseLayout>
  );
}
