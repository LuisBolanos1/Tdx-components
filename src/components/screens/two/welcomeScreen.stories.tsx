import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlWelcomeScreen from "./WelcomeScreen";


export default {
    title: 'UI/Screens/Two',
    component: TlWelcomeScreen,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlWelcomeScreen>

const Template: ComponentStory<typeof TlWelcomeScreen> = (args) => <TlWelcomeScreen {...args} />;

export const WelcomeScreen = Template.bind({});
WelcomeScreen.args = {}