import * as React from 'react';
import styled from "@emotion/styled";
import {Grid2} from "@mui/material";
import hello_emoji from "../../assets/emoji/Waving Hand.json";
import Lottie from "lottie-react";
import {Header} from "../../components/styled/Header";
import {Body1} from "../../components/styled/Body1";
import {StyledButton} from "../../components/styled/StyledButton";


export const Welcome = () => {
    return (
        <Grid2 container
               direction={"column"}
               justifyContent={"space-between"}
               alignItems={"center"}
               height={"100vh"}
               paddingY={"50px"}
        >
            <Grid2 container
                   direction={"column"}
                   justifyContent={"center"}
                   alignItems={"center"}
                   flexGrow={1}
            >
                <Emoji animationData={hello_emoji}
                       loop={true}
                       style={{width: 60, height: 60, backgroundColor: 'transparent'}}
                />

                <Header marginBlockStart={"40px"}>
                    Welcome!
                </Header>

                <Body1 marginBlockStart={"10px"} paddingX={"70px"}>
                    This is your personal news aggregator. Let's set up the flow of your news.
                </Body1>

            </Grid2>

            <StyledButton variant={"contained"}
                          color={"primary"}
                          size={"large"}
                          href={"/topics"}
            >
                Let's start!
            </StyledButton>
        </Grid2>
    );
};


const Emoji = styled(Lottie)`
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90px;
        height: 90px;
        border-radius: 35%;
        background-color: #474747;
    }
`