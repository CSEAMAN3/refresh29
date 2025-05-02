'use client'

import {useState, useEffect} from 'react'
import {ShareIcon} from '@heroicons/react/24/outline'

export default function ShareButton() {

  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleShare = async () => {
    if(navigator.share){
      try{
        await navigator.share({
          title: document.title,
          url: url,
        })
        console.log("shared successfully")
      } catch(error){
        console.error("Sharing failed", error)
      }
    }else{
      try{
        await navigator.clipboard.writeText(url)
        alert('URL copied to clipboard')
      }catch(error){
        console.error("clipboard failed", error)
        alert('failed to copy url')
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="mt-4 hover:cursor-pointer bg-primary hover:bg-grassroots p-2 rounded-full text-off-white hover:text-primary"
    >
      <ShareIcon className="w-6 h-6" />
    </button>
  )
}
