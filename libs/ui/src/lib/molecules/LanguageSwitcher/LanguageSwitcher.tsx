import { MouseEvent } from "react";
import styled from "styled-components";
import flagPL from "./flagPL.png";
import flagEN from "./flagUS.png";

interface LanguageSwitcherProps {
    languages: {
        [key: string]: string;
    };
    setLanguage: (lang: string) => void;
}

export const LanguageSwitcher = ({ languages, setLanguage }:LanguageSwitcherProps) => {
    const onLanguageChange = (event: MouseEvent<HTMLButtonElement>) => {
        setLanguage(event.currentTarget.value);
    };

    return (
        <LanguageButtons>
            {Object.keys(languages).map((lang) => (
                <Button
                    key={lang}
                    value={lang}
                    onClick={onLanguageChange}
                    style={{ backgroundImage: `url(${lang === 'PL' ? flagPL : flagEN})`, width: "32px", height: "24px" }}
                >
                </Button>
            ))}
        </LanguageButtons>
    )
};

const LanguageButtons = styled.div`
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        margin-left: 8px;
    }
`;

const Button = styled.button`
    background-color: transparent;
    background-position: center;
    border: none;
    margin: 2px;
    border-radius: 2px;
`;