import Intro from "components/UI/organisms/Intro";
import Careers from "components/UI/organisms/Careers";
import Academis from "components/UI/organisms/Academis";

export default function About() {
  return (
    <section className="px-4">
      <Intro />
      <section className="md:grid md:grid-cols-2">
        <Careers className="md:mb-0 mb-4" />
        <Academis />
      </section>
    </section>
  );
}
