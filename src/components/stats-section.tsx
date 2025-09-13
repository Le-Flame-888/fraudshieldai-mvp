"use client";
import { motion } from "motion/react";

const StatsSection = () => {
  return (
    <section className="pt-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-foreground text-balance max-w-xl  text-center mx-auto text-3xl font-semibold md:text-4xl"
        >
          <span className="text-muted-foreground">FraudShield AI by Numbers</span>{" "}
          Stats
        </motion.h2>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Fraud detection accuracy improved by
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">99%</p>
            <p className="text-xl font-semibold text-muted-foreground">
              precision
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              False positives reduced by up to
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">85%</p>
            <p className="text-xl font-semibold text-muted-foreground">
              fewer alerts
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Real-time fraud scoring under
            </p>
            <p className="pt-4 text-5xl font-semibold lg:pt-10">50</p>
            <p className="text-xl font-semibold text-muted-foreground">
              milliseconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsSection };