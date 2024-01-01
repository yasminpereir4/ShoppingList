"use client";
import ImageBar from "@/assets/Image.png";
import Image from "next/image";
import { ItemCard } from "./components/ItemCard";

export default function Home() {
  return (
    <main className="flex bg-[#0C0C0D] flex-col min-h-screen">
      <Image src={ImageBar} alt="" className="w-full" />
      <div className="justify-center items-center flex">
        <div className="w-full max-w-[720px] flex flex-col">
          <h1 className="text-white font-bold text-2xl -mt-24">
            Lista de Compras
          </h1>
          <div className="flex flex-row gap-3 max-w-[720px]">
            <div className="flex flex-col">
              <p className="text-[#AFABB6] font-normal text-sm py-2">Item</p>
              <input className="bg-[#111112] rounded-md border border-[#252529] p-3" />
            </div>
            <div className="flex flex-row gap-3 md:flex-row">
              <div className="flex flex-col">
                <p className="text-[#AFABB6] font-normal text-sm py-2">
                  Quantidade
                </p>
                <select
                  className="bg-[#111112] rounded-md border border-[#252529] p-3 w-[168px]"
                  name="Unidade"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="More">5 ou mais</option>
                </select>
              </div>
              <div className="flex flex-col">
                <p className="text-[#AFABB6] font-normal text-sm py-2">
                  Categoria
                </p>
                <select
                  className="bg-[#111112] rounded-md border border-[#252529] p-3 w-[168px]"
                  name="Categoria"
                  defaultValue="default"
                >
                  <option disabled={true} value="default">
                    Selecione
                  </option>
                  <option value="fruit">Fruta</option>
                  <option value="bakery">Padaria</option>
                  <option value="drink">Bebida</option>
                  <option value="vegetable">Legume</option>
                  <option value="meat">Carne</option>
                </select>
              </div>
              <div className="flex items-center ">
                <button className="bg-[#7450AC] rounded-full w-10 h-10 mt-8">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="py-3">
            <ItemCard isFruit category="fruta" />
            <ItemCard isBakery category="padaria" />
            <ItemCard isVegetable category="legumes" />
            <ItemCard isDrink category="bebida" />
            <ItemCard isMeat category="carne" />
          </div>
        </div>
      </div>
    </main>
  );
}
