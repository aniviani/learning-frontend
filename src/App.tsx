import { MaxMin } from "./features/MaxMin/MaxMin"
import {Counter3} from "./features/Counter3/Counter3"
import { Switch } from "./features/Switch/Switch"

export const App = () => {

  return (
  <>
    <MaxMin step={1} minValue={0} maxValue={5}/>
    <Switch/>
    <Counter3 step={1}/>
  </>
  )
}
