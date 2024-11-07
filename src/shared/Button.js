import React from 'react'

export default function CustomButton({title,action}) {
  return (
    <div>
        <button
        onClick={action}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgColor"
          >
            {title}
          </button>
    </div>
  )
}
