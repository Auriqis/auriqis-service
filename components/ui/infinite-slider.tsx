'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  speed: number; // Add this property
  speedOnHover?: number; // Ensure this property is also included
}
export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const translation = useMotionValue(0)
  const [ref, bounds] = useMeasure()

  useEffect(() => {
    const size =
      direction === 'horizontal' ? bounds.width : bounds.height

    if (!size) return

    const contentSize = size / 2 + gap
    const from = reverse ? -contentSize : 0
    const to = reverse ? 0 : -contentSize

    const controls = animate(translation, [from, to], {
      ease: 'linear',
      duration: currentDuration,
      repeat: Infinity,
    })

    return () => controls.stop()
  }, [bounds.width, bounds.height, currentDuration, gap, direction, reverse])

  return (
    <div className={cn('overflow-hidden w-full', className)}>
      <motion.div
        ref={ref}
        className="flex w-max items-center"
        style={{
          gap,
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
