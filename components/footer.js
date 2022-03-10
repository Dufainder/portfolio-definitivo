import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Dufainder Bedoya. Thanks Takuya Matsuyama for the magnificent 3D animation.
    </Box>
  )
}

export default Footer
