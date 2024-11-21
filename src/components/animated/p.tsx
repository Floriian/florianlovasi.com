"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const p = React.forwardRef<
  HTMLParagraphElement,
  HTMLMotionProps<"p">
>((props, ref) => {
  return <motion.p ref={ref} {...props} />;
});

p.displayName = "animated.p";

export default p;
