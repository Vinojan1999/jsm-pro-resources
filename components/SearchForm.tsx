"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { formUrlQuery } from '@/sanity/utils'

const SearchForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [search, setSearch] = useState('');

    useEffect(() => {
        let newUrl = '';

        // Debouncing an input simply means that we won't be making a request  every time that we add a new keystroke, 
        //     rather will wait for about 2ms to 300ms and then once we type enough charesters in will make a search
        const delayDebounceFn = setTimeout(() => {
            if(search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search
                })
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']     // to remove keystroke
                })
            }

            router.push(newUrl, { scroll: false });
        }, 300)     // I can type as much as I want, nothing gonna happen. But Once I stoped typing for 300ms, then changes going to be applied 

        return () => clearTimeout(delayDebounceFn)
    }, [search])
    

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image
                src='/magnifying-glass.svg'
                alt='Search icon'
                className='absolute left-8'
                width={32}
                height={32}
            />
            <Input
                className='base-regular h-fit border border-black-400 bg-black-300 py-4 sm:py-5 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800/40 rounded-xl' 
                type='text'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </label>
    </form>
  )
}

export default SearchForm