'use client';

import Answer from "@/components/Answer";
import BasicOperator from "@/components/BasicOperator";
import Nine from "@/components/Nine";
import { useState } from "react";


export default function Home() {
  const [answer, setAnswer] = useState("");

  const insertNumber = (n: string) => {
    setAnswer(previousState => {
      console.log(previousState + n);
        return previousState + n;
    });
  }
  return (
    <main className=" w-max flex flex-col mx-auto mt-16">
      <div className="flex flex-col p-3 bg-sky-200 rounded-2xl">
        <div className="pb-5">
          <Answer ans={String(answer)}/>
        </div>
        <div className="rounded-md border-blue-500 border-2 flex flex-row ">
          <div className="flex-1 p-2">

            <Nine onclick={insertNumber}/>
          </div>

          <div className="p-2 flex-1">
            <BasicOperator />
          </div>
        </div>
        
      </div>
      
    </main>
  )
}
