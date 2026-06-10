import MyAllBookings from "@/components/tables/MyBookingsTable";
import { headers } from "next/headers";
import React from "react";

const fetchMyBookings = async () => {
  const res = await fetch("https://car-doctor-resources.vercel.app/api/service", {
    headers:new Headers(await headers()),
  });
  const d = await res.json();
  return d;
};
export default async function MyBookingsPage() {
    const data = await fetchMyBookings();
  return (
    <div>
      <MyAllBookings data={data} />
    </div>
  );
}
