import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-blue-950">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}