import { ConfirmationContainer, ConfirmationContent, PurchaseDetailsContainer } from "./styles";

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <PurchaseDetailsContainer></PurchaseDetailsContainer>
      </ConfirmationContent>
    </ConfirmationContainer>
  )
}