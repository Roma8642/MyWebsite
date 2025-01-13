"use client";

import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
    initial: {
        opacity: 0, // Начнем с полной прозрачности
    },
    animate: {
        opacity: 1, // Плавно переходим в видимость
    },
    exit: {
        opacity: 0, // При выходе снова становимся прозрачными
    },
};

const Transition = () => {
    return (
        <div>
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-[#2d2d2d]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ duration: 0.3, ease: "easeInOut" }} // Быстрое исчезновение и появление
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-[#1a1a1a]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }} // Немного запоздалое появление второго слоя
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-[#0f0f0f]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }} // Еще один слой с задержкой
            />
        </div>
    );
};

export default Transition;
