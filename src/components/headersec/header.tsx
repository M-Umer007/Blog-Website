import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/themes/theme-provider";
import { ThemeToggle } from "@/components/ui/themes/theme-toggle";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Header() {
  return (


    <nav className="pt-2 sticky top-0 z-50 h-[8vh] w-[100vw] mx-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center">
  <div className="flex justify-around items-center w-full">
      
      <div>
        <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Umer&apos;s Blog</span>
            </Link>
      </div>


        <div>
          <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">

            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 hover:underline ">
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 hover:underline">
              About
            </Link>

            <Link
              href="./blog"
              className="transition-colors hover:text-foreground/80 hover:underline">
              Blogs
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 hover:underline">
              Contact
            </Link>

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ThemeToggle />
            </ThemeProvider>
          </nav>
        </div>

        <div className="space-x-5 sm:hidden">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeToggle />
          </ThemeProvider>

          {/* <div className="w-[20px]  md:hidden"> */}

          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>

              <SheetTitle>Umer&apos;s Blog</SheetTitle>

                <div className="flex flex-col gap-8">
                  <SheetDescription>
                    <Link href="/" className="">
                      HOME
                    </Link>
                  </SheetDescription>
                  <SheetDescription>
                    <Link href="/about" className="">
                      ABOUT
                    </Link>
                  </SheetDescription>
                  <SheetDescription>
                    <Link href="./blog" className="">
                      BLOGS
                    </Link>
                  </SheetDescription>
                  <SheetDescription>
                  <Link href="./contact" className="">
                      CONTACTS
                    </Link>
                    </SheetDescription>
                </div>
                </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
