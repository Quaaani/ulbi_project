import { Flex } from '../../Flex'
import { FlexProps } from '../../Flex/ui/Flex'

export type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => <Flex direction="row" {...props} />
