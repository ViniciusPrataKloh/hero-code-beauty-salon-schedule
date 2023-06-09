import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: 'email' | 'password' | 'text' | 'tel' | 'date' | 'time'
    icon?: JSX.Element
    register?: UseFormRegister<FieldValues> | any
}

export function InputTransparent({
    placeholder,
    type,
    icon,
    register,
    ...props
}: Props) {
    return (
        <div className="flex gap-2 bg-transparent font-light text-base -text-primary px-2 py-2 rounded-2xl -border-primary border-2 focus:outline-none placeholder:-text-primary/70">
            {icon ? <i>{icon}</i> : <></>}
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent focus:outline-none"
                {...register}
                {...props}
            />
        </div>
    )
}
