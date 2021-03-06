import { useCurrentDate } from "../useCurrentDate";
import { ClockContainer, ClockElement, ClockLabel } from "./styled";

const Clock = ({ languages, language }) => {
    const date = useCurrentDate();

    return (
        <ClockContainer>
            <ClockElement>
                <ClockLabel>
                    {languages[language].clockLabel}
                    {" "}
                    {date.toLocaleString(language, {
                        weekday: "long",
                    })}
                </ClockLabel>
                {date.toLocaleString(language, {
                    // weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })}
            </ClockElement>
        </ClockContainer>
    );
};

export default Clock;