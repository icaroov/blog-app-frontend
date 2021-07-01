import { MouseEventHandler } from 'react'
import { Tooltip, IconButton } from '@chakra-ui/react'

interface ButtonWithTooltipProps {
  label: string
  hoverColor: string
  ariaLabel: string
  icon: React.ReactElement
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonWithTooltip = ({
  label,
  hoverColor,
  ariaLabel,
  icon,
  ...rest
}: ButtonWithTooltipProps) => {
  return (
    <Tooltip hasArrow label={label} fontSize="md">
      <IconButton
        _hover={{ color: hoverColor }}
        variant="outline"
        aria-label={ariaLabel}
        icon={icon}
        {...rest}
      />
    </Tooltip>
  )
}

export default ButtonWithTooltip
