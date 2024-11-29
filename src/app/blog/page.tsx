import itemss from "./blogcontent";
import Link from "next/link"
import Image from "next/image"

export default function Blog() {


  const abc = itemss.map((item) => (
    
        <li key={item.id} className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
      
         <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
             <Image 
             src={item.image}
             height={1000}
             width = {1000}
             alt="abc"/>
         </div>
         <Link href={`/blog/${item.id}`}>Read Blog</Link>
         <div className="flex flex-wrap items-center mt-6">
             <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
         </div>
         
         </li>
         
  ));

  return (
    <div className="flex flex-col justify-center items-center w-[90vw] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mt-8  sm:mt-12 md:mt-16">
          All Articles & Insights
  </h1>
    {/* <Featuredcmp/> */}
    <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {abc}
    </ul>
    
    </div>

  );
}

