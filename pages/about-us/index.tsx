import { useRouter } from 'next/router'
import { Button } from '../../src/components/Button/styled'


const AboutUs: React.FC = () => {
  const router = useRouter()
  return (
    <div>AboutUs
    <Button color='secondary' onClick={() => router.push('/')}>Home</Button>
    </div>
  )
}

export default AboutUs