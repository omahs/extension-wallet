import {
  BarBackButton,
  BarCloseButton,
  CellStack,
  NavigationContainer,
} from "@argent/ui"
import { FC, Suspense, useMemo } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import { SearchIcon } from "../../components/Icons/SearchIcon"
import {
  ControlledInputType,
  StyledControlledInput,
} from "../../components/InputText"
import { Spinner } from "../../components/Spinner"
import { showTokenId } from "../accountActivity/transform/transaction/transformTransaction"
import { useSelectedAccount } from "../accounts/accounts.state"
import { TokenList } from "../accountTokens/TokenList"
import {
  TokenDetailsWithBalance,
  useKnownTokens,
} from "../accountTokens/tokens.state"

const SearchBox = styled.form`
  margin-top: 8px;
`

const StyledInput: ControlledInputType = styled(StyledControlledInput)`
  padding: 16px;
  padding-left: 41px;
`

const InputBefore = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`

const TabView = styled.div`
  margin: 24px -24px 0;
`

export const SendScreen: FC = () => {
  const { control, watch } = useForm({
    defaultValues: { query: "" },
  })

  const account = useSelectedAccount()
  const currentQueryValue = watch().query
  const tokensInNetwork = useKnownTokens(account)
  const tokenList = useCustomTokenList(tokensInNetwork, account?.networkId, currentQueryValue)

  if (!account) {
    return <></>
  }

  return (
    <NavigationContainer
      leftButton={<BarBackButton />}
      rightButton={<BarCloseButton />}
      title={"Send"}
    >
      <Container>
        <SearchBox>
          <StyledInput
            autoComplete="off"
            name="query"
            placeholder="Search"
            type="text"
            control={control}
            autoFocus
          >
            <InputBefore>
              <SearchIcon />
            </InputBefore>
          </StyledInput>
        </SearchBox>

        <TabView>
          <Suspense fallback={<Spinner size={64} style={{ marginTop: 40 }} />}>
            <CellStack pt={0}>
              <TokenList
                tokenList={tokenList}
                variant="no-currency"
                navigateToSend
                showNewTokenButton
              />
            </CellStack>
          </Suspense>
        </TabView>
      </Container>
    </NavigationContainer>
  )
}

const useCustomTokenList = (
  tokenDetails: TokenDetailsWithBalance[],
  networkId?: string,
  query?: string,
) => {
  return useMemo(() => {
    if (!query) {
      return tokenDetails
    }

    const queryLowercase = query.toLowerCase()

    const result = tokenDetails.filter(
      (token) =>
        token.name.toLowerCase().includes(queryLowercase) ||
        showTokenId(networkId ?? 'mainnet', token.id).toLowerCase().includes(queryLowercase) ||
        token.symbol.toLowerCase().includes(queryLowercase),
    )
    return result
  }, [query, tokenDetails, networkId])
}
