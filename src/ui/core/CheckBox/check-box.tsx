type CheckBoxProps = {
    checked: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
    return (
        <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer"
            checked={checked}
            onChange={onChange}
        />
    )
}

export { CheckBox }
