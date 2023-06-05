import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/logo.png" className="w-44 sm:w-auto" height={60} width={186} alt="" />
    </Link>
  );
}
