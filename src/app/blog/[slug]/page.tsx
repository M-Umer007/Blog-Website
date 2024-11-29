"use client"

import { useParams } from "next/navigation"
import itemss from "../blogcontent"
import Image from "next/image"

export default function Slug (){
    
    const {slug} = useParams()

    // const routeaddress = route.query
    
        // const a = itemss.find((fff)=>fff=== toString(routeaddress.id))
    
    const baca = itemss.find((fff)=> fff.id.toString() === slug  )

        if(!baca)
        {
          return (
            <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/29534989/pexels-photo-29534989/free-photo-of-autumn-leaves-on-open-book-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                
              <div className="absolute inset-0 bg-black opacity-50"></div>
          
              <div className="p-8 rounded-lg shadow-lg text-center max-w-md w-full z-10">
                <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg text-white mb-4">
                  We couldn&apos;t find the item you&apos;re looking for. Maybe try a different search?
                </p>
                <button 
                  onClick={() => window.history.back()} 
                  className="mt-4 bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Go Back
                </button>
              </div>
            </div>
          );
          
        }


        return (
            <div className="p-6 max-w-4xl mx-auto  rounded-lg shadow-md">
              {/* Blog Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold ">{baca.title}</h1>
              </div>
          
              {/* Blog Image */}
              <div className="flex justify-center mb-8">
                <Image
                  src={baca.image}
                  width={500}
                  height={500}
                  alt="none"
                  className="rounded-lg shadow-lg"
                />
              </div>
          
              {/* Blog Content */}
              <div className=" text-lg leading-relaxed">
                <p>{baca.content}</p>
              </div>
            </div>
          );
          
}