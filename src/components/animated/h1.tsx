"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const h1 = React.forwardRef<
  HTMLParagraphElement,
  HTMLMotionProps<"h1">
>((props, ref) => {
  return <motion.h1 ref={ref} {...props} />;
});

h1.displayName = "animated.h1";

export default h1;
