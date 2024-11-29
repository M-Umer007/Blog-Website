"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"



export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  )

  const aba = [
    {
      id: 1,
      title: "The Foundations of Programming",
      description: "Master the building blocks of programming and computational thinking.",
      content: `
        Programming is the essence of instructing computers to perform tasks. It begins with understanding the problem and devising a clear sequence of steps to solve it. For beginners, starting with high-level languages like Python simplifies the journey.
  
        Key concepts include:
        1. **Variables**: Storage containers for data.
        2. **Control Flow**: Decision-making processes like if-else conditions and loops.
        3. **Functions**: Modular chunks of code designed to perform specific tasks.
        4. **Data Structures**: Arrays, lists, and dictionaries for organizing data.
  
        Real-world applications include building simple calculators, automating tasks, and writing scripts to analyze data. Mastery of these basics leads to more advanced topics like object-oriented programming (OOP) and working with APIs.
        
        Learning programming also involves:
        - Debugging: Identifying and fixing errors in code.
        - Best Practices: Writing clean, readable, and efficient code.
        - Collaboration: Using tools like Git to work on team projects.
  
        Practice is key. Start small and consistently build your skills with projects that challenge your understanding. Programming is not just about coding; it’s about problem-solving and innovation.
      `,
      image: "https://images.pexels.com/photos/943101/pexels-photo-943101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Demystifying Algorithms",
      description: "Understand algorithms as the DNA of efficient problem-solving.",
      content: `
        Algorithms are the heart of computer science, dictating how efficiently problems are solved. Whether its searching for a value in a database or navigating a GPS route, algorithms make it all possible.
  
        **Types of Algorithms**:
        1. **Sorting Algorithms**: Bubble sort, merge sort, quicksort.
        2. **Search Algorithms**: Binary search, depth-first search (DFS), breadth-first search (BFS).
        3. **Optimization Algorithms**: Greedy algorithms, dynamic programming.
  
        **Example: Sorting with Quicksort**
        Quicksort divides the input into smaller parts (using a pivot) and recursively sorts each partition. Its average time complexity is O(n log n), making it efficient for large datasets.
  
        Beyond fundamentals, explore:
        - **Machine Learning Algorithms**: Neural networks, decision trees, clustering techniques.
        - **Cryptography**: Algorithms like RSA for secure communication.
        - **Compression**: Reducing file sizes with Huffman coding.
  
        By analyzing and implementing algorithms, developers gain insights into trade-offs like speed versus memory usage. Experimenting with real-world datasets or coding platforms like HackerRank can sharpen algorithmic thinking.
      `,
      image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "A Deep Dive into Web Development",
      description: "Explore the process of creating modern, responsive, and dynamic websites.",
      content: `
        Web development encompasses everything from building static HTML pages to designing dynamic web apps with complex backend systems.
  
        **Frontend Development**:
        The visual and interactive aspects of a website are handled using:
        1. **HTML**: The structure.
        2. **CSS**: Styling and layout.
        3. **JavaScript**: Adding interactivity.
  
        Frameworks like React, Angular, and Vue have revolutionized frontend development by enabling reusable components and enhancing performance.
  
        **Backend Development**:
        This involves servers, databases, and application logic. Technologies include:
        - **Node.js**: For server-side scripting.
        - **Express.js**: For handling API routes.
        - **Databases**: SQL and NoSQL solutions like PostgreSQL and MongoDB.
  
        **Full-Stack Development**:
        Full-stack developers bridge the gap between frontend and backend, working on both to ensure seamless integration.
  
        Future Trends:
        - **Serverless Architectures**: Reducing infrastructure overhead.
        - **Progressive Web Apps (PWAs)**: Combining the best of web and mobile apps.
        - **Web3**: Leveraging blockchain for decentralized applications.
  
        To excel, start by building small projects like portfolios, then expand to dynamic apps like e-commerce stores. Collaborate on open-source projects to learn industry practices.
      `,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
     <CarouselContent>
  {aba.map((a, index) => (
    <CarouselItem key={index}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
            <span className="text-4xl font-semibold flex flex-col items-center">
              <Image 
                src={a.image} 
                alt="Image"
                width={1000}
                height={1000}
              />

              {/* Centered Button */}
              <div className="py-5">
                <Button asChild>
                  <Link href={`/blog/${a.id}`}>
                    <p className="text-sm text-center py-5 hover:underline">
                      Read Blog
                    </p>
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-center py-5">
                {a.description}
              </p>
            </span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
