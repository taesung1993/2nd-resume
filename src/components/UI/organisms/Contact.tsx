import Title from "components/UI/atoms/Title";
import { FaRegEnvelope, FaPhone, FaGithub } from "react-icons/fa";
export default function Contact() {
  const contacts: any[] = [
    {
      id: "phone",
      icon: <FaPhone />,
      value: "010-5228-6821",
    },
    {
      id: "mail",
      icon: <FaRegEnvelope />,
      value: "cheonyulin@gmail.com",
    },
    {
      id: "github",
      icon: <FaGithub />,
      value: (
        <a href="https://github.com/taesung1993" target="_blank">
          https://github.com/taesung1993
        </a>
      ),
    },
  ];
  return (
    <section className="mb-4">
      <Title title="연락처" />
      <ul className="flex flex-col gap-4 mt-2 mb-6">
        {contacts.map((content) => (
          <li key={content.id} className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center text-white mr-4">
              {content.icon}
            </div>
            <div className="text-base">{content.value}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
