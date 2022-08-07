import { InfoItem } from "models/interfaces/InfoItem";

interface Props {
  info: InfoItem[];
}

export default function InfoList({ info }: Props) {
  const limit = info.length - 1;
  return (
    <ul>
      {info.map((data, index) => {
        return (
          <li key={index} className={"flex" + (index < limit ? " mb-2" : "")}>
            <img
              className="w-16 h-16 border"
              src={data.image.src}
              alt={data.image.alt}
            />
            <div className="pl-2">
              <h6 className="text-lg font-bold">{data.title}</h6>
              <div>{data.period}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
