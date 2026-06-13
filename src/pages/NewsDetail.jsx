import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useOneNews } from "../hooks/useNews";

const NewsDetail = () => {
  const { slug } = useParams();

  const { data: onenews, isPending, isError } = useOneNews(slug);

  if (isPending) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-slate-500">
        Loading news details...
      </div>
    );
  }

  if (isError || !onenews) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-red-500">
        News nicht gefunden.
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      {/* HERO */}
      <div className="relative h-[480px] w-full">
        <img
          src={onenews.image}
          alt={onenews.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10 text-white max-w-6xl">
          <span className="bg-blue-600 px-3 py-1 text-xs uppercase rounded font-semibold">
            {onenews.tag}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight font-quicksand">
            {onenews.title}
          </h1>

          <p className="mt-3 text-white/80 text-sm">
            Tech News • feraiQ Redaktion • 2026
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 ">
        {/* ARTICLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {onenews.desc}
          </p>

          {/* CONTENT BLOCKS */}
          {onenews.content?.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {block.text}
                  </p>
                );

              case "image":
                return (
                  <figure key={index}>
                    <img
                      src={block.url}
                      alt={block.caption || "News image"}
                      className="w-full h-100 rounded-lg object-cover"
                    />

                    {block.caption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-500">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "list":
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {block.title}
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-blue-600 pl-4 italic text-gray-600 text-lg"
                  >
                    "{block.text}"
                  </blockquote>
                );

              default:
                return null;
            }
          })}

          {/* TAG */}
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {onenews.tag}
            </span>
          </div>

          {/* FOOTER */}
          <div className="border-t pt-6 text-sm text-gray-500">
            Veröffentlicht von feraiQ Redaktion • Deutschland
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsDetail;
