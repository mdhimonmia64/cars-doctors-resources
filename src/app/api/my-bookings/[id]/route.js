import { authOptions } from "@/lib/authOption";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const singleBooking = await bookingCollection.findOne(query);
    const isOwnerOk = email === singleBooking?.email;
    if (isOwnerOk) {
        return NextResponse.json(singleBooking)
    }
    else {
        return NextResponse.json({ message: "Forbidden GET action" }, { status: 403 })
    }

}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query);
    const isOwnerOk = email === currentBookingData?.email;
    if (isOwnerOk) {
        const body = await req.json();
        const filter = {
            $set: {
                ...body
            }
        }
        const option = {
            upsert: true
        }
        const updatedBooking = await bookingCollection.updateOne(query, filter, option);
        return NextResponse.json(updatedBooking);
    }
    else {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
    }


}