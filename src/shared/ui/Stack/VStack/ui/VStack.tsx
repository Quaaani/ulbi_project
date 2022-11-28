import { Flex } from '../../Flex'
import { FlexProps } from '../../Flex/ui/Flex'

export type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => <Flex direction="column" align="start" {...props} />
