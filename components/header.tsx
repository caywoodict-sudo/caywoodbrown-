"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const menuItems = [
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Mission", path: "/#mission" },
        { name: "Our Team", path: "/team" },
        { name: "Our History", path: "/about#history" },
      ],
    },
    {
      name: "Programs",
      path: "/#programs",
      dropdown: [
        { name: "Educational Support", path: "/programs/education" },
        { name: "Google Digital Skills", path: "/programs/google-training" },
        { name: "Community Outreach", path: "/programs/community" },
        { name: "Health Initiatives", path: "/programs/health" },
      ],
    },
    {
      name: "Get Involved",
      path: "/volunteer",
      dropdown: [
        { name: "Volunteer", path: "/volunteer" },
        { name: "Donate", path: "/#donate" },
        { name: "Partner With Us", path: "/partner" },
        { name: "Fundraise", path: "/fundraise" },
      ],
    },
    { name: "News", path: "/blog" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative h-10 w-10 overflow-hidden rounded-full bg-amber-100"
          >
            <Image
              src="/placeholder.svg?height=40&width=40&text=CBF"
              alt="Caywood Brown Foundation Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
          <span className="text-lg font-bold text-gray-900">Caywood Brown Foundation</span>
        </Link>

        <nav className={`hidden md:flex gap-1 text-gray-900`}>
          {menuItems.map((item, index) => (
            <div key={index} className="relative group" onMouseLeave={closeDropdown}>
              {item.dropdown ? (
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium hover:text-amber-500 transition-colors"
                  onMouseEnter={() => toggleDropdown(item.name)}
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link href={item.path} className="px-3 py-2 text-sm font-medium hover:text-amber-500 transition-colors">
                  {item.name}
                </Link>
              )}

              {item.dropdown && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
                >
                  <div className="py-1">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        onClick={closeDropdown}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/#donate">Donate</Link>
          </Button>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden z-10 text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white md:hidden"
            >
              <div className="container flex flex-col h-full pt-20 pb-8 px-4">
                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      {item.dropdown ? (
                        <>
                          <button
                            className="flex items-center justify-between text-xl font-medium hover:text-amber-500 transition-colors"
                            onClick={() => toggleDropdown(item.name)}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-2 mt-2 ml-4 border-l-2 border-amber-200 pl-4">
                                  {item.dropdown.map((dropdownItem, idx) => (
                                    <Link
                                      key={idx}
                                      href={dropdownItem.path}
                                      className="text-gray-600 hover:text-amber-500 py-1"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          className="text-xl font-medium hover:text-amber-500 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto">
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                    <Link href="/#donate" onClick={() => setIsMenuOpen(false)}>
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
