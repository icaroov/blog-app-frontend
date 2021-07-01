import { Tooltip, IconButtonProps, IconButton } from '@chakra-ui/react'

interface ButtonWithTooltipProps extends IconButtonProps {
  label: string
  hoverColor: string
}

const ButtonWithTooltip = ({
  label,
  hoverColor,
  ...rest
}: ButtonWithTooltipProps) => {
  return (
    <Tooltip hasArrow label={label} fontSize="md">
      <IconButton _hover={{ color: hoverColor }} variant="outline" {...rest} />
    </Tooltip>
  )
}

export default ButtonWithTooltip
