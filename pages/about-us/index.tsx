import { useRouter } from 'next/router';

import { Button } from '~/components/index';

const AboutUs: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      AboutUs
      <Button color="secondary" onClick={() => router.push('/')}>
        Home
      </Button>
    </div>
  );
};

export default AboutUs;
