"use client";

import {
  Header,
  HeroSection,
  JobApplicationForm,
  HistorySection,
  Footer
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-900">
      <Header />
      <HeroSection />
      <JobApplicationForm />
      <HistorySection />
      <Footer />
    </div>
  );
}
