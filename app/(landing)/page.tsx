import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home Page (Public)</h1>
      <br />
      <hr />
      <br />
      <Link href="/sign-in">
        <Button>SignIn</Button>
      </Link>
      <Link href="/sign-up">
        <Button>SignUp</Button>
      </Link>
    </div>
  );
}

export default Home;
