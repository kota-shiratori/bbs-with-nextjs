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
  const [isLoading, setIsLoading] = useState(true); // ローディング状態の管理

  useEffect(() => {
    setIsLoading(true); // データフェッチ前にローディング状態をtrueに
    getBBSAllData().then((data) => {
      setBbsAllData(data);
      setIsLoading(false); // データフェッチ後にローディング状態をfalseに
    });
  }, []);

  // ローディング中の表示
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // データが空の場合の表示
  if (bbsAllData.length === 0) {
    return <div>No data found.</div>;
  }

  return <BBSCardList bbsAllData={bbsAllData} />;
}