"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const scrollViewport = {
  once: true,
  amount: 0.25,
} as const;

type MotionSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
  from?: "left" | "right" | "up";
  immediate?: boolean;
};

export function MotionSection({
  children,
  className,
  delay = 0,
  from = "up",
  immediate = false,
  ...props
}: MotionSectionProps) {
  const offset = from === "up" ? { y: 16 } : { y: 20 };

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : scrollViewport}
      transition={{ duration: 0.4, delay, ease }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function MotionItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"article">) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.4, ease }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
