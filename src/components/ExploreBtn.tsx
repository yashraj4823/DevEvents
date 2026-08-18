'use client';

import React from "react"
import Image from "next/image";

export const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("Clicked")}>
        <a href="#events">
            Explore Events 
            <Image src="/icons/arrow-down.svg" alt="arroe-down" width={24} height={24} />
        </a>
    </button>
  )
}
