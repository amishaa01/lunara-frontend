"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  LUNARA
                </span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/docs" className="text-sm font-medium text-green-600">
                  Documentation
                </Link>
                <Link href="/#calculator" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Calculator
                </Link>
                <Link href="/#live-demo" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Demo
                </Link>
              </nav>
            </div>

            <Link 
              href="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}
