import ImageBar from "@/assets/Image.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#0C0C0D] flex-col">
      <div className="absolute w-[100%]">
        <Image src={ImageBar} alt="" className="w-[100%]" />
        <div className="justify-center items-center flex">
          <h1 className="text-white font-bold text-2xl relative bottom-16 right-96">
            Lista de Compras
          </h1>
        </div>
      </div>
    </main>
  );
}
