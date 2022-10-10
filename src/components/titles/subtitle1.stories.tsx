import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TlSubtitle1 } from "./Titles";

export default {
    title: 'UI/Titles',
    component: TlSubtitle1,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlSubtitle1>

const Template: ComponentStory<typeof TlSubtitle1> = (args) => <TlSubtitle1 {...args}/>

export const PrototypeSubtitle = Template.bind({});
PrototypeSubtitle.args = {
    text: 'Test subtitle'
}


