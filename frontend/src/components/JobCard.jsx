import React from 'react'

export default function JobCard(job) {
  return (
    
    <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 flex-shrink-0">
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> */}
          </div>
          <div class="flex-grow">
            <h2 class="text-white text-lg title-font font-medium mb-3">{job.company}</h2>
            <p class="leading-relaxed text-base">
                {job.profileName}
            </p>
            <a class="mt-3 text-purple-400 inline-flex items-center">Apply
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
            </a>
          </div>
        </div>
      </div>
  )
}
