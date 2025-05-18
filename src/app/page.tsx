"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  {
    id: "darksouls",
    title: "Dark Souls Remastered",
    image: "/darksouls.jpg",
    lore: "A dark and twisted land where the undead rise, fire fades, and only ashes remain.",
    release: "2018",
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    image: "/bloodborne.jpg",
    lore: "In the ancient city of Yharnam, hunters fight beasts and eldritch nightmares.",
    release: "2015",
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    image: "/eldenring.jpg",
    lore: "Explore the Lands Between and unravel the mysteries of the shattered Elden Ring.",
    release: "2022",
  },
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-white relative"
      style={{
        background: "linear-gradient(135deg, #1f1f1f 0%, #2e2e2e 100%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to the Soulsborne Universe!
      </motion.h1>

      <motion.p
        className="text-lg max-w-xl text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Discover legendary games like <b>Dark Souls</b>, <b>Bloodborne</b>, and{" "}
        <b>Elden Ring</b>. Click on a title to explore its dark lore and
        secrets.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {games.map((game) => (
          <motion.div
            key={game.id}
            className="bg-[#2a2a2a] p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setSelectedGame(game)}
          >
            <Image
              src={game.image}
              alt={game.title}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold text-center mt-4">
              {game.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {/* Details Panel */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1c1c1c] p-8 rounded-lg max-w-md w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-2 right-4 text-white text-2xl"
              >
                &times;
              </button>
              <Image
                src={selectedGame.image}
                alt={selectedGame.title}
                width={400}
                height={400}
                className="rounded-md mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedGame.title}</h2>
              <p className="text-sm mb-4 italic text-gray-400">
                Released: {selectedGame.release}
              </p>
              <p className="text-base">{selectedGame.lore}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
