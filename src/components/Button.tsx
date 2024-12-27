'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ScriptProps } from 'next/script';

export default function Button(props: ScriptProps) {
    console.log(typeof(props), ":", props);
    const pathname = usePathname();
    return (
        <button onClick={()=>{console.log(`${pathname} clicked`)}}
        >
        hello: {props.children }</button>
    )
}