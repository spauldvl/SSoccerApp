import Image from "next/image";
import MyCalendar from "@/components/Calendar";

export default function Home() {
  return (
    <main>
      <p> 
        <MyCalendar/>
        this is our application
      </p>
    </main>
  );
}

