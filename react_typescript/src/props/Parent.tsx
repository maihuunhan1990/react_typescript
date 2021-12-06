import { Child } from "./Child";

const Parent = () => {
    return <Child color="color" onClick={() => {console.log('clicking')}}/>
}

export default Parent;