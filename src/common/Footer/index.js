import { Content, Wrapper } from "./styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Content as="a"
                href="https://github.com/pecet3"
                title="link do mojego githuba">
                Jakub Pacewicz 2023
            </Content>
            <Content as="a"
                href="https://github.com/pecet3"
                title="o stronie">
                O stronie
            </Content>
        </Wrapper>
    )
}