import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-white text-black">
      <Container className="text-center">
        <p className="mb-5 text-sm tracking-[0.2em] text-black/40">404 / Not found</p>
        <h1 className="text-[clamp(4rem,15vw,12rem)] tracking-[-0.08em]">Lost?</h1>
        <Link href="/" className="mt-8 inline-block border-b border-black/40 pb-1 text-sm transition-colors hover:border-black">
          トップへ戻る
        </Link>
      </Container>
    </main>
  );
}

