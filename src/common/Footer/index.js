import { About, Container, Facebook, Github, Title, Wrapper } from "./styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Title as="a"
                href="https://github.com/pecet3"
                title="link do mojego githuba">
                Jakub Pacewicz 2023
            </Title>
            <Container>
                <Github />
                <Facebook />
                <About>
                    Hej, niezmiernie mi miło, że zajrzałeś na tę stronę.
                    Zrobiłem ją w celu utrwalenia mojej wiedzy z dziedziny frontendu.
                    Wszystkie dane na stronie pochodzą z darmowych API.
                </About>
            </Container>
        </Wrapper>
    )
}