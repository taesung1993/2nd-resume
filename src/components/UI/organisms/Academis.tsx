import Title from "components/UI/atoms/Title";
import InfoList from "components/UI/molecules/InfoList";
import { InfoItem } from "models/interfaces/InfoItem";

interface Props {
  className?: string;
}

export default function Academis({ className }: Props) {
  const academis: InfoItem[] = [
    {
      image: {
        src: "/images/koreatech.jpeg",
        alt: "koreatech",
      },
      title: "한국기술교육대학교",
      period: "졸업",
    },
  ];

  return (
    <section className={className}>
      <Title title="학력" />
      <InfoList info={academis} />
    </section>
  );
}
