"use client";

import React, { useEffect, useState } from "react";
import BBSCardList from "@/app/components/BBSCardList";
import { BBSData } from "@/app/types/types";

async function getBBSAllData() {
  const response = await fetch("https://bbs-with-nextjs.vercel.app/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default function ClientSideComponent() {
  const [bbsAllData, setBbsAllData] = useState<BBSData[]>([]);

  useEffect(() => {
    getBBSAllData().then((data) => setBbsAllData(data));
  }, []);

  return <BBSCardList bbsAllData={bbsAllData} />;
}