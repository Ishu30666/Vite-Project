import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white pt-24 px-6 md:px-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">
          Welcome to Ishu Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          Fast, reliable and professional services for all your needs – from
          document work to government forms.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-gray-700">
        <h2 className="text-3xl font-semibold text-blue-300 mb-12 text-center">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Quick Service",
              desc: "We value your time and provide express document processing.",
            },
            {
              title: "Expert Support",
              desc: "Our team ensures accurate and up-to-date documentation work.",
            },
            {
              title: "Affordable Pricing",
              desc: "Best rates in town without compromising on service quality.",
            },
          ].map(({ title, desc }, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-gray-700">
        <h2 className="text-3xl font-semibold text-blue-300 mb-12 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Photocopy & Print Services",
            "PAN / Aadhar Card Assistance",
            "All Government Forms",
            "Online Applications",
            "E-Services (Birth/Death Cert., etc.)",
            "Passport Services",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition"
            >
              <h4 className="text-lg font-semibold text-white">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center border-t border-gray-700">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
          Visit our shop today or contact us online to get your documents done
          fast and professionally.
        </p>
        <button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full transition">
          Contact Us
        </button>
      </section>

      {/* Footer-like Padding */}
      <div className="h-40" />
    </div>
  );
}
