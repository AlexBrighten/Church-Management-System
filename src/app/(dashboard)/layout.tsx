import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
  <div className="h-screen flex">

    {/* LEFT SIDEBAR */}
    <div className="w-[14%] md:[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
      <Link href="/" className="flex items-center justify-center lg:justify-start p-4 gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32}/>
        <span className="hidden font-bold lg:block">CSI St.Johns Church</span>
      </Link>
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">R</div>

  </div>
  );
}
