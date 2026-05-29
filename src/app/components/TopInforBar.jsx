import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function TopInfoBar() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16 lg:px-24 rounded-2xl container mx-auto my-10 ">
      <div className="grid md:grid-cols-3 gap-6 text-center md:text-left items-center">

        <div className="flex items-center justify-center md:justify-start gap-4 ">
          <FaClock className="text-orange-500 text-3xl" />
          <div>
            <p className="text-sm text-gray-400">We are open monday-friday</p>
            <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <FaPhoneAlt className="text-orange-500 text-3xl" />
          <div>
            <p className="text-sm text-gray-400">Have a question?</p>
            <h3 className="text-xl font-semibold">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <FaMapMarkerAlt className="text-orange-500 text-3xl" />
          <div>
            <p className="text-sm text-gray-400">Need a repair? our address</p>
            <h3 className="text-xl font-semibold">Liza Street, New York</h3>
          </div>
        </div>

      </div>
    </div>
  );
}