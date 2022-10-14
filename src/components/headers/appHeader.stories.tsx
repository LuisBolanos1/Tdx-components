import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlHeaderApplications from "./AppHeader";


export default {
    title: 'UI/Headers',
    component: TlHeaderApplications,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlHeaderApplications>

const Template: ComponentStory<typeof TlHeaderApplications> = (args) => <TlHeaderApplications {...args} />;

export const HeaderApplication = Template.bind({});
HeaderApplication.args = {}