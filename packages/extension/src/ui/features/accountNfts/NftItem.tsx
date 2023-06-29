import { H6 } from "@argent/ui"
import { Circle, Box, Image, Tooltip } from "@chakra-ui/react"
import { FC } from "react"
import { WarningIconRounded } from "../../components/Icons/WarningIconRounded"
import { NftThumbnailImage } from "./NftThumbnailImage"

interface NftItemProps {
  name: string
  thumbnailSrc: string
  logoSrc?: string
  total?: number
  unverifiedCollection?: boolean
}

const NftItem: FC<NftItemProps> = ({ logoSrc, name, thumbnailSrc, total, unverifiedCollection }) => (
  <Box as="figure" role="group">
    <Box
      position="relative"
      transition={"transform 0.2s ease-in-out"}
      _groupHover={{
        transform: "scale(1.05)",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <NftThumbnailImage src={thumbnailSrc} />
      {(unverifiedCollection === true) && (
        <Tooltip label={"Unverified Collection"}>
          <Circle
            overflow={"hidden"}
            position={"absolute"}
            left={110}
            bottom={110}
            size={16}
          >
            <WarningIconRounded />
          </Circle>
        </Tooltip>
      )}
      {logoSrc && (
        <Box
          bg="neutrals.800"
          position="absolute"
          p="1"
          w="48px"
          h="48px"
          bottom="-1"
          left="-1"
          borderRadius="lg"
        >
          <Image src={logoSrc} borderRadius="lg" />
        </Box>
      )}
    </Box>

    <Box
      as="figcaption"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pt="3"
    >
      <H6 textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
        {name}
      </H6>
      {total && <H6 color="neutrals.400">{total}</H6>}
    </Box>
  </Box>
)

export { NftItem }
