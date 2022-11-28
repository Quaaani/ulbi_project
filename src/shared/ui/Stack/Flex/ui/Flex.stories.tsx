import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HStack, HStackProps } from '../../HStack/ui/HStack'
import { VStack } from '../../VStack'
import { VStackProps } from '../../VStack/ui/VStack'

import { Flex, FlexProps } from './Flex'

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <div style={{ border: '1px solid black', padding: '0px 10px' }}>First item</div>
        <div style={{ border: '1px solid black', padding: '0px 10px' }}>Second item</div>
        <div style={{ border: '1px solid black', padding: '0px 10px' }}>Third item</div>
        <div style={{ border: '1px solid black', padding: '0px 10px' }}>Fourth item</div>
        <div style={{ border: '1px solid black', padding: '0px 10px' }}>Fith item</div>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args: FlexProps) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
    }}
  >
    <Flex {...args} />
  </div>
)

export const RowGap16 = Template.bind({})
RowGap16.args = {
  direction: 'row',
  gap: '16',
}

export const ColumnGap4 = Template.bind({})
ColumnGap4.args = {
  direction: 'column',
  gap: '4',
}

const VStackTemplate: ComponentStory<typeof VStack> = (args: VStackProps) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
    }}
  >
    <VStack {...args} />
  </div>
)

export const VStackGap8 = VStackTemplate.bind({})
VStackGap8.args = {
  gap: '8',
}

const HStackTemplate: ComponentStory<typeof HStack> = (args: HStackProps) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
    }}
  >
    <HStack {...args} />
  </div>
)

export const HStackGap8 = HStackTemplate.bind({})
HStackGap8.args = {
  gap: '8',
}
