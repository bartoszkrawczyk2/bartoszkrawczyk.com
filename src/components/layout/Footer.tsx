import { Container } from '../common/Container';

export function Footer() {
  return (
    <div className="bg-white text-center text-slate-500 py-10">
      <Container>Copyright © {new Date().getFullYear()} Bartosz Krawczyk</Container>
    </div>
  );
}
