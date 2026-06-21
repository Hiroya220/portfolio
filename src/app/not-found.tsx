import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return <main className="grid min-h-svh place-items-center bg-[#080808] text-white"><Container className="text-center"><p className="mb-5 text-xs uppercase tracking-[.2em] text-white/40">404 — Not found</p><h1 className="text-[clamp(4rem,15vw,12rem)] font-medium tracking-[-.07em]">Lost?</h1><Link href="/" className="mt-8 inline-block border-b border-white/40 pb-1 text-sm">Back home</Link></Container></main>;
}

