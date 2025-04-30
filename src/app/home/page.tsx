import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to FitLife Gym</h1>
          <p className="text-lg mt-2">Your journey to fitness starts here</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4 text-gray-300">
            At FitLife Gym, we provide state-of-the-art equipment, expert
            trainers, and a supportive community to help you achieve your
            fitness goals.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Modern Equipment</h3>
            <p className="mt-2 text-gray-300">
              Top-notch machines and tools for every workout need.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Expert Trainers</h3>
            <p className="mt-2 text-gray-300">
              Certified professionals to guide you every step of the way.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Community Support</h3>
            <p className="mt-2 text-gray-300">
              Join a community that motivates and inspires you.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2023 FitLife Gym. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
