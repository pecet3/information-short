import { About, Container, Facebook, Github, Icons, Title, Wrapper } from "./styled"

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
                    <p>
                        Narodowy Bank Polski:
                        <td>
                            <a href="https://api.nbp.pl/" rel="noreferrer" target="_blank">
                                https://api.nbp.pl/
                            </a>
                        </td>
                    </p>
                    <p>
                        Narodowy Bank Polski:
                        <td>
                            <a href="https://api.nbp.pl/" rel="noreferrer" target="_blank">
                                https://api.nbp.pl/
                            </a>
                        </td>
                    </p>
                    <p>
                        Narodowy Bank Polski:
                        <td>
                            <a href="https://api.nbp.pl/" rel="noreferrer" target="_blank">
                                https://api.nbp.pl/
                            </a>
                        </td>
                    </p>
                </About>
            </Container>
        </Wrapper>
    )
}