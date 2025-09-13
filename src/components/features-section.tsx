"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowUp,
  Globe,
  Play,
  Plus,
  Signature,
  Sparkles,
  GitFork,
  Eye,
  Star,
  Brain,
  Workflow,
  Zap,
  Database,
  Shield,
  Plug,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
          >
            <span className="text-muted-foreground">
              Protect Your Business with AI-Powered
            </span>{" "}
            Fraud Detection
          </motion.h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="col-span-full space-y-4">
              <Card className="overflow-hidden px-6 sm:col-span-2">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
                >
                  <FraudDetectionIllustration />
                </motion.div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <motion.h3 className="text-foreground text-lg font-semibold">
                  Real-Time Fraud Detection for Morocco
                </motion.h3>
                <motion.p className="text-muted-foreground mt-3 text-balance">
                  Advanced machine learning models tailored for Moroccan banking,
                  e-commerce, and telecom sectors. Detect fraud instantly.
                </motion.p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <MultiSectorIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Multi-Sector Intelligence System
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Specialized models for banking, e-commerce, and telecom fraud
                  patterns.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <SecureAPIIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Enterprise-Grade Security API
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Secure API endpoints with authentication. Integrate seamlessly
                  with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FraudDetectionIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      {/* FraudShield Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
          <Shield className="size-4 text-foreground/60" />
        </div>
        <div>
          <div className="text-sm font-medium">FraudShield AI</div>
          <div className="text-muted-foreground text-xs">Real-time protection</div>
        </div>
      </div>

      {/* Detection Stats */}
      <div className="mb-4 flex gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <AlertTriangle className="size-3 text-red-500" />
          <span className="text-xs">124 threats</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="size-3 text-green-500" />
          <span className="text-xs">99.2% accuracy</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="size-3" />
          <span className="text-xs">3 sectors</span>
        </div>
      </div>

      {/* Transaction Monitor */}
      <div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
        <div className="text-muted-foreground text-xs font-medium mb-2">
          Live Transaction Analysis
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-red-500 size-1.5 rounded-full"></div>
            <span>Banking: High risk detected</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-green-500 size-1.5 rounded-full"></div>
            <span>E-commerce: Transaction safe</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-yellow-500 size-1.5 rounded-full"></div>
            <span>Telecom: Medium risk flagged</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-green-500 size-1.5 rounded-full"></div>
            <span>Banking: Approved transaction</span>
          </div>
        </div>
      </div>

      {/* API Status Badge */}
      <div className="mt-3 flex justify-center">
        <div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
          API Active
        </div>
      </div>
    </Card>
  );
};

const MultiSectorIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      {/* AI Brain Center */}
      <div className="mb-4 flex justify-center">
        <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
          <Brain className="size-5 text-foreground/60" />
        </div>
      </div>

      {/* Sector Status */}
      <div className="mb-4 text-center">
        <div className="text-sm font-medium">Multi-Sector AI Models</div>
        <div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
          <div className="bg-foreground/40 size-1.5 rounded-full"></div>
          Active Protection
        </div>
      </div>

      {/* Sector Analysis */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Database className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Banking Fraud
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Globe className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              E-commerce Risk
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Zap className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Telecom Security
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-4 text-center">
        <div className="text-muted-foreground text-xs">
          Processing transactions...
        </div>
      </div>
    </Card>
  );
};

const SecureAPIIllustration = () => {
  return (
    <div aria-hidden className="relative">
      {/* Main API Hub */}
      <Card className="p-4">
        <div className="mb-3 flex items-center justify-center">
          <div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
            <Shield className="size-4 text-foreground/60" />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-medium">Secure API Gateway</div>
          <div className="text-muted-foreground text-xs">Enterprise Ready</div>
        </div>

        {/* API Endpoints */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Zap className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              /predict
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Database className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              PostgreSQL
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Plug className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              API Keys
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <TrendingUp className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Analytics
            </div>
          </div>
        </div>
      </Card>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 h-px w-full"></div>
      </div>
    </div>
  );
};