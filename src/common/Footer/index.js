import { About, Container, Facebook, Github, Icons, Li, Title, Ul, Wrapper } from "./styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Title>
                Jakub Pacewicz 2023
            </Title>
            <Container>
                <Icons>
                    <a href="https://github.com/pecet3" rel="noreferrer" target="_blank">
                        <Github />
                    </a>
                    <a href="https://www.facebook.com/jakub.pacewicz.9" rel="noreferrer" target="_blank">
                        <Facebook />
                    </a>

                </Icons>
                <About>
                    Hej, niezmiernie mi miło, że zajrzałeś na tę stronę.
                    Zrobiłem ją w celu utrwalenia mojej wiedzy z dziedziny frontendu.
                    Wszystkie dane na stronie pochodzą z darmowych API.
                    <Ul>
                        <Li>
                            <a href="https://api.nbp.pl/" rel="noreferrer" target="_blank">
                                https://api.nbp.pl/
                            </a>
                        </Li>
                        <Li>
                            <a href="https://newsdata.io/" rel="noreferrer" target="_blank">
                                https://newsdata.io/
                            </a>
                        </Li>
                        <Li>
                            <a href="https://open-meteo.com/" rel="noreferrer" target="_blank">
                                https://open-meteo.com/
                            </a>
                        </Li>
                        <Li>
                            <a href="https://dog.ceo/" rel="noreferrer" target="_blank">
                                https://dog.ceo/
                            </a>
                        </Li>
                        <Li>
                            <a href="https://aws.random.cat/view/1618" rel="noreferrer" target="_blank">
                                https://aws.random.cat/view/1618
                            </a>
                        </Li>
                    </Ul>
                </About>
            </Container>
        </Wrapper>
    )
}