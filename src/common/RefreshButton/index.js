import { Button, ButtonIcon, ButtonText } from "./styled"

export const RefreshButton = ({ buttonText, action }) => {
    return (
        <Button onClick={action}>
            <ButtonIcon alt="ikonka przeładowania" />
            <ButtonText>
                {buttonText}
            </ButtonText>
        </Button>
    )
}