"use client";
import MyAllBookings from '@/components/tables/MyBookingsTable'
import React, { useEffect, useState } from 'react'

export default function MyBookingsPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyBookings = async () => {
            const res = await fetch("/api/service");
            const d = await res.json();
            setData(d);
        };
        fetchMyBookings();
    },[])
  return (
    <div>
        <MyAllBookings data={data} />
    </div>
  )
}
