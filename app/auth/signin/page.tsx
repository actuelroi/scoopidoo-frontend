"use client";

import { useEffect } from "react";
import { useCreateStore } from "@/store/create-account.store";

export default function Page() {
  const { isOpen, onOpen } = useCreateStore();

  useEffect(() => {
    console.log("before open:", isOpen);
    onOpen();
  }, []);

  useEffect(() => {
    console.log("after change:", isOpen);
  }, [isOpen]);

  return null;
}