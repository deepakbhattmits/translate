import { FC } from 'react'
import Field from './Field'
import Button from './Button'
import HighCharts from './HighCharts'

const UserCreate: FC = (): JSX.Element => (
  <div className="ui form">
    <Field />
    <Button />
    <HighCharts />
  </div>
)
export default UserCreate
