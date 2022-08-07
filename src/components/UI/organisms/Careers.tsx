import Title from "components/UI/atoms/Title";
import InfoList from "components/UI/molecules/InfoList";
import { InfoItem } from "models/interfaces/InfoItem";

interface Props {
  className?: string;
}

export default function Careers({ className }: Props) {
  const careers: InfoItem[] = [
    {
      image: {
        src: "/images/gollala.webp",
        alt: "gollala",
      },
      title: "골라라",
      period: "2021년 4월 ~ 2022년 7월",
    },
    {
      image: {
        src: "/images/ai-nomis.webp",
        alt: "gollala",
      },
      title: "(주)에이아이노미스(AI-NOMIS)",
      period: "2020년 11월 ~ 2021년 4월",
    },
  ];

  return (
    <section className={className}>
      <Title title="경력" />
      <InfoList info={careers} />
    </section>
  );
}
