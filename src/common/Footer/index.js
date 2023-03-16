import { About, Content, Wrapper } from "./styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Content as="a"
                href="https://github.com/pecet3"
                title="link do mojego githuba">
                Jakub Pacewicz 2023
            </Content>
            {/* <About>
                Hej, niezmiernie mi miło, że zajrzałeś na tę stronę.
                Zrobiłem ją w celu utrwalenia mojej wiedzy z dziedziny frontendu.
                Wszystkie dane na stronie pochodzą z darmowych API.
            </About> */}
        </Wrapper>
    )
}