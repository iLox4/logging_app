export type InputProps<T> = {
    value: string | number
    handleChange: (event: React.ChangeEvent<T>) => void
    id: string
    label?: string
    width?: string
    name?: string
}
