import { Form, Wrapper, Input } from "./styled"

export const Calculator = () => {

    return (
        <Wrapper>
            <Form onChange={(event) => event.preventDefault()}>
                <Input type="number" min="0.01" step="0.01">

                </Input>
            </Form>
        </Wrapper>
    )
}