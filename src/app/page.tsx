import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Featuredcmp from "@/components/Featuredcmp/featured"
import itemss from '../components/Featuredcmp/featured';
import { CarouselPlugin } from "@/components/caraousual/Carausual"
import Link from "next/link"
import Image from "next/image"

export default function Page() {


  let renderingthing =  itemss.map((items)=>(
       
    <li key={items.id} className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
     <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
      <Image 
             src={items.image}
             height={1000}
             width = {1000}
             alt="abc"/>
     </div>
     <Link href={`/blog/${items.id}`}>Read Blog</Link>
     <div className="flex flex-wrap items-center mt-6">
         <p className="w-full flex-none text-[0.9125rem] leading-6 text-slate-500 dark:text-slate-400">{items.description}</p>
     </div>

     </li>
     ))
    
     


  return (
    <div className="flex flex-col gap-10 mx-auto">

     
{/* Welcoming text and thing */}
      <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
        <h1 className="text-sm leading-6 font-semibold text-sky-500">
          Showcase
          </h1>
          <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
           Welcome to my Website.</p>
           <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
  Welcome to my little corner of the web. Here, I share my thoughts, experiences, and ideas----<a className="font-semibold border-b border-sky-300 text-gray-900 hover:border-b-2 dark:text-white dark:border-sky-400" href="/showcase/tailwind">all crafted with Tailwind's simplicity</a>.
  </p>
      </div>


<div className=" flex flex-col items-center sm:flex-none  sm:grid sm:grid-cols-3 w-[90vw] sm:max-w-3xl  mx-auto ">

<div className="flex flex-col justify-between z-20 sm:self-stretch">

      
        <div className="">
        <h4 className="scroll-m-20 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            My latest Blogs
          </h4>
        </div>
     
        <div className="hidden sm:block">
        <Button asChild>
          <Link href="/blog">Search All Blogs</Link>
        </Button>


        </div>
     

</div>

<div className="col-span-3 col-start-2 col-end-3">
    <CarouselPlugin/>
</div>
        <div className="block sm:hidden">
        <Button asChild>
          <Link href="/blog">Search All Blogs</Link>
        </Button>
        </div>

</div>

<div className="flex flex-col w-[90vw] mx-auto mt-10">
    <div className="h-[8vh] w-auto bg-background/95  border-y flex items-center">
    <p className=" text-[1rem] leading-none sm:text-xl tracking-tight font-bold text-slate-900 dark:text-white">Featured Blogs</p>
</div>
    
    <div className="">
    {/* <Featuredcmp/> */}
    <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {renderingthing}
    </ul>
    
    </div>
</div>

 
    </div>
  )
}