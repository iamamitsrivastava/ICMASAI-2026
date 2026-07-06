import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Users, Globe, Calendar } from "lucide-react";
import { conferenceConfig } from "@/config/conferenceConfig";
import { formatDateSafe } from "@/lib/date-utils";

const Registration = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] mb-6">
          Registration
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          Will be announced soon
        </h2>
      </div>
    </div>
  );
};

export default Registration;