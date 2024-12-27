import { ScriptProps } from 'next/script';

export default function Button(props: ScriptProps) {
    return (
        <button className={props.className==props.children ? "active-page" : ""}>
            {props.children}
        </button>
    )
}