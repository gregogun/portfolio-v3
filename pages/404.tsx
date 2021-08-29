import { Container } from 'pages';
import Link from 'next/link';
import { link } from '@/styles/link';

export default function NotFound() {
  return (
    <Container
      css={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        paddingTop: '$7'
      }}
    >
      <h1>
        It seems {" you've "} lost your way traveller. Let us guide you home.
      </h1>
      <Link href="/">
        <a className={link()}>Take me home, website gods.</a>
      </Link>
    </Container>
  );
}
