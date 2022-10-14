import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TlTitle2 } from "./Titles";

export default {
    title: 'UI/Titles',
    component: TlTitle2,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTitle2>

const Template: ComponentStory<typeof TlTitle2> = (args) => <TlTitle2 {...args}/>


