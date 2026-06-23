import {
  FaUsers,
  FaClock,
  FaHeadset,
  FaTools,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

export default function ChooseUs() {
  const features = [
    { title: "Expert Team", icon: <FaUsers /> },
    { title: "Timely Delivery", icon: <FaClock />, active: true },
    { title: "24/7 Support", icon: <FaHeadset /> },
    { title: "Best Equipment", icon: <FaTools /> },
    { title: "100% Guranty", icon: <FaShieldAlt /> },
    { title: "Timely Delivery", icon: <FaBoxOpen /> },
  ];

  return (
      <section className="container mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold mt-2">Why Choose Us</h2>
      <p className=" mt-3 max-w-2xl mx-auto">
        The Majority Have Suffered Alteration In Some Form, By Injected Humour,
        Or Randomised Words Which Don't Look Even Slightly Believable.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10 ">
        {features.map((item, index) => (
          <div
            key={index}
            className={`border rounded-xl p-5 flex flex-col items-center justify-center gap-2 transition hover:-translate-y-1 hover:bg-red-500 hover:text-white
            `}
          >
            <div className="text-3xl">{item.icon}</div>
            <p className="font-semibold text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}