import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/gym-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        <header className="bg-gray-900 bg-opacity-70 py-6 shadow-md">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-yellow-400">
              Welcome to FitLife Gym
            </h1>
            <p className="text-lg mt-2 text-gray-200">
              Your journey to fitness starts here
            </p>
          </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              At FitLife Gym, we provide state-of-the-art equipment, expert
              trainers, and a supportive community to help you achieve your
              fitness goals.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Modern Equipment",
                desc: "Top-notch machines and tools for every workout need.",
              },
              {
                title: "Expert Trainers",
                desc: "Certified professionals to guide you every step of the way.",
              },
              {
                title: "Community Support",
                desc: "Join a community that motivates and inspires you.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 bg-opacity-80 p-6 rounded-xl text-center shadow-lg"
              >
                <h3 className="text-2xl font-bold text-yellow-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-300">Basic</h3>
                <p className="text-gray-300 mt-2">$29/month</p>
                <p className="text-gray-400 mt-1">
                  Gym access, 1 trainer session/month
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-300">Standard</h3>
                <p className="text-gray-300 mt-2">$49/month</p>
                <p className="text-gray-400 mt-1">
                  Gym + group classes + 4 trainer sessions
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-300">Premium</h3>
                <p className="text-gray-300 mt-2">$79/month</p>
                <p className="text-gray-400 mt-1">
                  All-access + personal trainer + nutrition plan
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold">What Our Members Say</h2>
            <div className="mt-8 max-w-4xl mx-auto">
              <blockquote className="italic text-gray-300">
                "FitLife Gym changed my life! The trainers are incredible and
                the environment is so motivating." – <strong>Alex R.</strong>
              </blockquote>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 bg-opacity-70 py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">
              © 2025 FitLife Gym. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
