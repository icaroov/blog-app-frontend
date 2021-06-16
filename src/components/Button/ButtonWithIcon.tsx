import { Button, VisuallyHidden } from '@chakra-ui/react'

interface ButtonWithIconProps {
  children: React.ReactElement
  hiddenText?: string
  color: string
}

const ButtonWithIcon = ({
  children,
  hiddenText,
  color
}: ButtonWithIconProps) => {
  return (
    <Button
      color="currentColor"
      variant="outline"
      _hover={{ color: color }}
      _focus={{
        boxShadow: '0 0 1px 2px #DD6B20, 0 1px 1px rgba(0, 0, 0, .15)'
      }}
    >
      {!!hiddenText && <VisuallyHidden>{hiddenText}</VisuallyHidden>}
      {children}
    </Button>
  )
}

export default ButtonWithIcon
