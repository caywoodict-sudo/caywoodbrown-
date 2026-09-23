"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyAccountButtonProps {
  accountNumber?: string
  account?: string
}

export default function CopyAccountButton({ accountNumber, account }: CopyAccountButtonProps) {
  const [copied, setCopied] = useState(false)
  const targetAccount = accountNumber || account || "0056692414"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(targetAccount)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#00521a]/10 hover:bg-[#00521a]/20 text-[#00521a] text-xs font-semibold transition-all active:scale-95"
      aria-label="Copy account number to clipboard"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#00521a]" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy NUBAN</span>
        </>
      )}
    </button>
  )
}
