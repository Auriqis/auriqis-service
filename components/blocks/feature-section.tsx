"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react" // Updated icons

interface Feature {
  step: string
  title?: string
  content: string
  text: string // Added text property to replace image
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  const handleNext = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const handlePrev = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8 flex flex-col justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <p className="text-lg md:text-xl text-black dark:text-white mb-4 text-left whitespace-pre-line"> {/* Updated to bold words wrapped in * */}
                        {feature.text.split(/(\*.*?\*)/).map((part, index) =>
                          part.startsWith("*") && part.endsWith("*") ? (
                            <strong key={index}>{part.slice(1, -1)}</strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-24 right-4 flex gap-3">
              <button
                onClick={handlePrev}
                className="bg-gray-300 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-400 dark:hover:bg-gray-600" /* Updated button background for light and dark modes */
              >
                <ArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" /> {/* Updated icon color for light and dark modes */}
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-300 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-400 dark:hover:bg-gray-600" /* Updated button background for light and dark modes */
              >
                <ArrowRight className="w-4 h-4 text-gray-700 dark:text-gray-300" /> {/* Updated icon color for light and dark modes */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
