"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { useClientOnly } from "@/hooks/use-client-only";
import { createDateObject } from "@/lib/date-utils";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const ImportantDates = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const isClient = useClientOnly();

  useEffect(() => {
    if (!isClient) return;
    
    // Set initial time only on client
    setCurrentTime(new Date());
    
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  const dates = [
    {
      title: "Paper Submission Deadline",
      date: createDateObject("2026-01-15"),
      icon: Clock,
      status: "upcoming",
    },
    {
      title: "Notification of Acceptance",
      date: createDateObject("2026-02-01"),
      icon: AlertCircle,
      status: "upcoming",
    },
    {
      title: "Camera-Ready Paper",
      date: createDateObject("2026-02-15"),
      icon: Calendar,
      status: "upcoming",
    },
    {
      title: "Early Bird Registration",
      date: createDateObject("2026-02-20"),
      icon: CheckCircle,
      status: "upcoming",
    },
    {
      title: "Conference Dates",
      date: createDateObject("2026-05-04"),
      icon: Calendar,
      status: "upcoming",
      isConference: true,
    },
  ].filter(item => item.date !== null) as Array<{
    title: string;
    date: Date;
    icon: React.ComponentType<{ className?: string }>;
    status: string;
    isConference?: boolean;
  }>;

  const getTimeRemaining = (date: Date) => {
    if (!currentTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false };
    }
    
    const diff = date.getTime() - currentTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    return { days, hours, minutes, seconds, isPast: false };
  };

  return (
    <section id="dates" className="py-20 bg-[#0f172a] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
            Important <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">Dates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Don&apos;t miss these critical deadlines for ICMASAI 2026
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800" />
            
            {/* Moving Wave Light on Timeline */}
            <motion.div 
              className="absolute left-[31px] w-1 h-32 bg-yellow-400 rounded-full shadow-[0_0_20px_4px_rgba(250,204,21,0.8)] z-0 transform -translate-x-1/2"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />

            {dates.map((item, index) => {
              const timeRemaining = getTimeRemaining(item.date);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-8 z-10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-gray-900 border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)] transform -translate-x-1/2 rounded-sm" />

                  <div className="ml-20 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-white hover:border-yellow-400/50 transition-colors shadow-lg ${
                        item.isConference ? "border-yellow-400 border-2 shadow-[0_0_20px_rgba(250,204,21,0.4)]" : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <item.icon className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                            <h3 className="text-xl font-bold text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">{item.title}</h3>
                          </div>
                          <p className="text-gray-300 mb-3 font-medium">
                            {isClient ? item.date.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }) : item.date.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long", 
                              day: "numeric",
                              timeZone: "UTC"
                            })}
                          </p>
                        </div>

                        {isClient && !timeRemaining.isPast && (
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
                              {timeRemaining.days}
                            </div>
                            <div className="text-sm text-gray-400">days left</div>
                          </div>
                        )}
                      </div>

                      {isClient && item.isConference && !timeRemaining.isPast && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { value: timeRemaining.days, label: "Days" },
                            { value: timeRemaining.hours, label: "Hours" },
                            { value: timeRemaining.minutes, label: "Minutes" },
                            { value: timeRemaining.seconds, label: "Seconds" },
                          ].map((time, i) => (
                            <div key={i} className="text-center p-2 bg-yellow-400/10 rounded border border-yellow-400/20">
                              <div className="text-lg font-bold text-yellow-300 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">{time.value}</div>
                              <div className="text-xs text-gray-400">{time.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;