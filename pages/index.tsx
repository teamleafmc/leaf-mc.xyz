import type { NextPage } from "next";
import Head from "next/head";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Tooltip } from "@mui/material";

const Home: NextPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 360,
      origin: {
        x: 0.5,
        y: 0.5
      }
    });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Leaf MC</title>
        <meta name="title" content="Leaf MC" />
        <meta name="description" content="A Minecraft server for everyone." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leaf-mc.xyz/" />
        <meta property="og:title" content="Leaf MC" />
        <meta property="og:description" content="A Minecraft server for everyone." />
        <meta property="og:image" content={""} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leaf-mc.xyz" />
        <meta property="twitter:title" content="Leaf MC" />
        <meta
          property="twitter:description"
          content="A Minecraft server for everyone."
        />
        <meta property="twitter:image" content={""} />
      </Head>
      <div className="text-white">
        {/* Main */}
        <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
          <div className="md:flex-1 md:mr-10">
            <h1 className="font-pt-serif text-5xl font-bold mb-7">
              Leaf MC
            </h1>
            <p className="font-pt-serif font-normal mb-7">
              {"A Minecraft server for everyone."}
            </p>
            <div className="font-montserrat">
              <Link href="/join">
                <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                  Join!
                </button>
              </Link>
              <Link href="/donate">
                <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                  Donate
                </button>
              </Link>
            </div>
          </div>
          <Tooltip title="Photo of the Leaf MC Spawn.">
            <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
              <div className="relative">
                <Link href="/photos">
                  <Image
                    src="/images/signin.png"
                    alt="TSMP Spawn"
                    className="absolute -top-16 -left-10 rounded-lg cursor-pointer"
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
            </div>
          </Tooltip>
        </section>
      </div>
    </>
  );
};

export default Home;
