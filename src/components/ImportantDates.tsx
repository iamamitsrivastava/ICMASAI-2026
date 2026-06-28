"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { useClientOnly } from "@/hooks/use-client-only";
import { createDateObject } from "@/lib/date-utils";

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
    <section id="dates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Important <span className="text-blue-950">Dates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t miss these critical deadlines for ICMASAI 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#222]" />

            {dates.map((item, index) => {
              const timeRemaining = getTimeRemaining(item.date);
              return (
                <div
                  key={index}
                  className="relative flex items-start mb-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-white border-2 border-[#222] transform -translate-x-1/2" />

                  <div className="ml-20 flex-1">
                    <div
                      className={`sketch-card ${
                        item.isConference ? "border-4" : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <item.icon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-3">
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
                            <div className="text-2xl font-bold">
                              {timeRemaining.days}
                            </div>
                            <div className="text-sm text-muted-foreground">days left</div>
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
                            <div key={i} className="text-center p-2 bg-primary/5 rounded">
                              <div className="text-lg font-bold">{time.value}</div>
                              <div className="text-xs text-muted-foreground">{time.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;