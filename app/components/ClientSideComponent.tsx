"use client";

import React from "react";
import { useQuery } from 'react-query';
import BBSCardList from "@/app/components/BBSCardList";
import { BBSData } from "@/app/types/types";

async function fetchBBSData() {
  const response = await fetch("https://bbs-with-nextjs.vercel.app/api/post", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default function ClientSideComponent() {
  const { data: bbsAllData, isLoading, error } = useQuery<BBSData[], Error>('bbsData', fetchBBSData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  // bbsAllDataがundefinedの場合は空の配列を渡す
  return <BBSCardList bbsAllData={bbsAllData || []} />;
}