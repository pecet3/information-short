import { About, Container, Facebook, Github, Icons, Title, Ul, Wrapper } from "./styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Title>
                Jakub Pacewicz 2023
            </Title>
            <Container>
                <Icons>
                    <Github />
                    <Facebook />
                </Icons>
                <About>
                    Hej, niezmiernie mi miło, że zajrzałeś na tę stronę.
                    Zrobiłem ją w celu utrwalenia mojej wiedzy z dziedziny frontendu.
                    Wszystkie dane na stronie pochodzą z darmowych API.
                    <Ul>
                        <li>
                            <a href="https://api.nbp.pl/" rel="noreferrer" target="_blank">
                                https://api.nbp.pl/
                            </a>
                        </li>
                        <li>
                            <a href="https://newsdata.io/" rel="noreferrer" target="_blank">
                                https://newsdata.io/
                            </a>
                        </li>
                        <li>
                            <a href="https://open-meteo.com/" rel="noreferrer" target="_blank">
                                https://open-meteo.com/
                            </a>
                        </li>
                        <li>
                            <a href="https://dog.ceo/" rel="noreferrer" target="_blank">
                                https://dog.ceo/
                            </a>
                        </li>
                        <li>
                            <a href="https://aws.random.cat/view/1618" rel="noreferrer" target="_blank">
                                https://aws.random.cat/view/1618
                            </a>
                        </li>
                    </Ul>
                </About>
            </Container>
        </Wrapper>
    )
}