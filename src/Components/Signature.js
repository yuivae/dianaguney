import React from "react";

//ADDITIONALS
import { motion } from "framer-motion";

export default function Signature({ tranSwipe, tranSmooth, delay }) {
  return (
    <motion.div
      className="signature-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ delay: delay && delay }}
    >
      <svg width="42" height="54" viewBox="0 0 42 54" fill="none">
        <motion.path
          d="M11.2312 30.6449C-11.6283 30.6449 10.6803 1 12.6082 1M12.6082 3.77055C14.5361 6.81816 11.664 35.0369 13.2182 28.2875M21.4806 19.0086C13.7893 19.0086 15.6378 26.4891 22.5232 29.8137C29.685 33.2719 20.3198 19.0086 22.5232 19.0086C37.3955 19.0086 1.59166 1 22.5232 1C24.4511 1 65.4193 1 18.7894 53"
          stroke="#6E6E6E"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { delay: delay && delay, ...tranSmooth(3) },
          }}
          exit={{ pathLength: 0, transition: tranSmooth(0.8) }}
          stroke-width="0.6"
        />
      </svg>
    </motion.div>
  );
}
