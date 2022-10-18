import { Warning } from "phosphor-react";
import { Content, RemoveContainer } from "./styles";
import { defaultTheme } from "../../../styles/themes/default";

interface RemoveCoffeeConfirmationProps {
  coffeeName: string;
}

export function RemoveCoffeeConfirmation({ coffeeName }: RemoveCoffeeConfirmationProps) {
  return (
    <RemoveContainer>
      <Content>
        <Warning size={48} weight='regular' color={defaultTheme["yellow-dark"]} />
        <p>Tem certeza que deseja excluir <strong>{coffeeName}</strong> da lista de produtos?</p>
      </Content>
    </RemoveContainer>
  )
}