import { Toggle } from './Toggle'

const Component = {
  component: Toggle,
  title: 'Elements/Toggle',
}

export default Component

export const Default = () => <Toggle>Toggle</Toggle>

export const Outline = () => <Toggle variant="outline">Toggle</Toggle>

export const Small = () => (
  <Toggle size="sm" variant="outline">
    Toggle
  </Toggle>
)

export const Large = () => (
  <Toggle size="lg" variant="outline">
    Toggle
  </Toggle>
)
