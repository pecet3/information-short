import { useEffect, useState } from "react";
import { Title, Wrapper, Clock } from "./styled"


const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return date;
}


export const Header = () => {
    const date = useCurrentDate();
    return (
        <Wrapper as="header">
            <Title>Informacja krótka.</Title>
            <Clock>{date.toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })}
            </Clock>
        </Wrapper>
    )
}