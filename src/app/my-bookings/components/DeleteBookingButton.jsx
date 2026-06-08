"use client";
import { useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteBookingButton({id}) {
  const router = useRouter();
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/api/service/${id}`,{
            method:"DELETE"
        })
        const data = await res.json();
        router.refresh()
        console.log(data)
    }
  return (
    <><MdOutlineDelete onClick={() => handleDelete(id)} className="h-8 w-8 font-bold cursor-pointer" /></>
  )
}
