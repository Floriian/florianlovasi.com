"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const div = React.forwardRef<
  HTMLParagraphElement,
  HTMLMotionProps<"div">
>((props, ref) => {
  return <motion.div ref={ref} {...props} />;
});

div.displayName = "animated.div";

export default div;
