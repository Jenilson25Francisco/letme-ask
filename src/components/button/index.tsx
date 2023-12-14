import { ButtonHTMLAttributes } from "react"
import "../../styles/Button.scss"

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonPros) {
    return (
        <button className="button" {...props} />


    )
}