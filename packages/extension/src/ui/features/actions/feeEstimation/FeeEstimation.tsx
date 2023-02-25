import { convertSetToAlph } from "@alephium/sdk"
import { L2, P4 } from "@argent/ui"
import { Flex } from "@chakra-ui/react"
import Tippy from "@tippyjs/react"
import { FC } from "react"

import {
  prettifyCurrencyValue,
} from "../../../../shared/token/price"
import { Tooltip } from "../../../components/CopyTooltip"
import { useAccount } from "../../accounts/accounts.state"
import { useFeeTokenBalance } from "../../accountTokens/tokens.service"
import { useExtensionIsInTab } from "../../browser/tabs"
import {
  LoadingInput,
  StyledInfoRoundedIcon,
  StyledReportGmailerrorredRoundedIcon,
} from "./styled"
import { TransactionsFeeEstimationProps } from "./types"
import { getTooltipText } from "./utils"

export const FeeEstimation: FC<TransactionsFeeEstimationProps> = ({
  accountAddress,
  networkId,
  transaction,
}) => {
  const fee = transaction && BigInt(transaction.result.gasAmount) * BigInt(transaction.result.gasPrice)
  const enoughBalance = true
  const extensionInTab = useExtensionIsInTab()
  const account = useAccount({ address: accountAddress, networkId })
  const { feeTokenBalance } = useFeeTokenBalance(account)

  return (
    <Flex direction="column" gap="1">
      <Flex
        borderRadius="xl"
        backgroundColor="neutrals.900"
        border="1px"
        borderColor="neutrals.500"
        boxShadow="menu"
        justifyContent="space-between"
        px="3"
        py="3.5"
      >
        <Flex alignItems="center" justifyContent="center">
          <P4 fontWeight="bold" color="neutrals.300">
            Network fee
          </P4>
          <Tippy
            content={
              <Tooltip as="div">
                {getTooltipText(fee?.toString(), feeTokenBalance)}
              </Tooltip>
            }
          >
            {enoughBalance ? (
              <StyledInfoRoundedIcon />
            ) : (
              <StyledReportGmailerrorredRoundedIcon />
            )}
          </Tippy>
        </Flex>
        {fee ? (
          <Flex
            gap="1"
            alignItems="center"
            direction={extensionInTab ? "row" : "column-reverse"}
          >
            {(
              <L2 color="neutrals.300">
                (Max {prettifyCurrencyValue(convertSetToAlph(fee), "ALPH")})
              </L2>
            )}

            <Flex alignItems="center">
              {fee !== undefined ? (
                <P4 fontWeight="bold">
                  ≈ {prettifyCurrencyValue(convertSetToAlph(fee), "ALPH")}
                </P4>
              ) : (
                <P4 fontWeight="bold">
                  ≈{" "}
                  <>{fee} Unknown</>
                </P4>
              )}
            </Flex>
          </Flex>
        ) : (
          <LoadingInput />
        )}
      </Flex>
    </Flex>
  )
}
