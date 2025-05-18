"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

type Game = (typeof games)[number];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedGame ? "hidden" : "auto";
  }, [selectedGame]);

  return (
    <main className="min-h-screen px-4 py-12 text-white bg-gradient-to-br from-neutral-900 to-neutral-800">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to the Soulsborne Universe!
      </motion.h1>

      <motion.p
        className="text-lg max-w-2xl mx-auto text-center mb-12 text-neutral-300 font-serif"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Discover legendary games like <strong>Dark Souls</strong>,{" "}
        <strong>Bloodborne</strong>, and <strong>Elden Ring</strong>. Click on a
        title to explore its dark lore and secrets.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
            className="bg-neutral-800 shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition transform rounded-2xl rounded-b-2xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setSelectedGame(game)}
          >
            <div className="relative w-full aspect-[2/3]">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{game.title}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 p-6 rounded-2xl max-w-md w-full text-center relative shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-2 right-4 text-white text-3xl leading-none"
              >
                &times;
              </button>

              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedGame.image}
                  alt={selectedGame.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">{selectedGame.title}</h2>
              <p className="text-sm italic text-gray-400 mb-4">
                Released: {selectedGame.release}
              </p>
              <p className="text-base text-gray-200">{selectedGame.lore}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
