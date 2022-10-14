import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TlTitle } from "./Titles";
import { ConstantsTypography } from "../Constants";

export default {
    title: 'UI/Titles',
    component: TlTitle,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTitle>

const Template: ComponentStory<typeof TlTitle> = (args) => <TlTitle {...args}/>

export const PrototypeTitle = Template.bind({});
PrototypeTitle.args = {
    text: 'Application stack',
    styles: ConstantsTypography.Title
}

export const PrototypeTitle2 = Template.bind({});
PrototypeTitle2.args = {
    text: 'Application stack',
    styles: ConstantsTypography.Title2
}

export const PrototypeSubtitle = Template.bind({});
PrototypeSubtitle.args = {
    text: 'Application stack',
    styles: ConstantsTypography.Subtitle
}

export const PrototypeSubtitle2 = Template.bind({});
PrototypeSubtitle2.args = {
    text: 'Application stack',
    styles: ConstantsTypography.Subtitle2
}
