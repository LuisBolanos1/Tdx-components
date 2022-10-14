import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlInitialHeader from "./InitialHeader";


export default {
    title: 'UI/Headers',
    component: TlInitialHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlInitialHeader>

const Template: ComponentStory<typeof TlInitialHeader> = (args) => <TlInitialHeader {...args} />;

export const HeaderInitPage = Template.bind({});
HeaderInitPage.args = {}