interface ChildProps {
    color: string
    onClick: () => void
}
export const Child: React.FC<ChildProps>  = ({onClick, color}) =>{
    return <div> {color}
    <button onClick = {onClick}>click me</button>
    </div>
}