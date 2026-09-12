import { ArrowRight, Clock3, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

const EmergencySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 md:px-12 md:py-16">

          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                Emergency Roadside Assistance
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
                Car Trouble?
                <span className="block text-red-500">
                  We’re Here to Help.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                Don’t let a breakdown ruin your day. Our professional
                roadside assistance team is ready to help you get back
                on the road safely and quickly.
              </p>

              {/* Features */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-500">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      24/7 Available
                    </h4>
                    <p className="text-sm text-gray-500">
                      Anytime, anywhere
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-500">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Expert Mechanics
                    </h4>
                    <p className="text-sm text-gray-500">
                      Trusted professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-500">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Fast Response
                    </h4>
                    <p className="text-sm text-gray-500">
                      Quick roadside support
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-red-500">
                    <PhoneCall size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Easy Contact
                    </h4>
                    <p className="text-sm text-gray-500">
                      One call is enough
                    </p>
                  </div>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="tel:+8801700000000"
                  className="btn border-0 bg-red-600 px-6 text-white hover:bg-red-700"
                >
                  <PhoneCall size={18} />
                  Call Emergency
                </a>

                <button className="btn btn-outline border-gray-600 px-6 text-white hover:border-white hover:bg-white hover:text-black">
                  Request Assistance
                  <ArrowRight size={18} />
                </button>

              </div>
            </div>

            {/* Right Emergency Card */}
            <div className="lg:pl-10">
              <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:p-8">

                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30">
                    <PhoneCall size={30} />
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    ● Online Now
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Need Immediate Help?
                </h3>

                <p className="mt-3 text-gray-400">
                  Call our emergency support team and get assistance
                  from a professional mechanic.
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-sm text-gray-500">
                  Emergency Hotline
                </p>

                <a
                  href="tel:+8801700000000"
                  className="mt-2 block text-2xl font-bold text-red-500 transition hover:text-red-400 md:text-3xl"
                >
                  +880 1319959656
                </a>

                <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      Available 24 Hours
                    </p>
                    <p className="text-xs text-gray-500">
                      7 days a week
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;