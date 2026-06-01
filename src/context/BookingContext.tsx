"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { BookingData } from "@/lib/constants";
import { SITE_PROGRAMS, type Program } from "@/lib/constants";

interface BookingContextValue {
  booking: BookingData;
  updateBooking: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
  selectedProgram: Program | undefined;
  expandedProgramId: string | null;
  setExpandedProgramId: (id: string | null) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const defaultBooking: BookingData = {
  programId: "",
  programTitle: "",
  date: "",
  adults: 1,
  children: 0,
  notes: "",
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [booking, setBooking] = useState<BookingData>(defaultBooking);
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState("all");

  const updateBooking = useCallback((data: Partial<BookingData>) => {
    setBooking((prev) => ({ ...prev, ...data }));
  }, []);

  const resetBooking = useCallback(() => {
    setBooking(defaultBooking);
  }, []);

  const selectedProgram = SITE_PROGRAMS.find(
    (p) => p.id === booking.programId
  );

  return (
    <BookingContext.Provider
      value={{
        booking,
        updateBooking,
        resetBooking,
        selectedProgram,
        expandedProgramId,
        setExpandedProgramId,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
