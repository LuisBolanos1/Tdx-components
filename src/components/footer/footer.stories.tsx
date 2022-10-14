import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlFooter from "./Footer";


export default {
    title: 'UI/Footer',
    component: TlFooter,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlFooter>

const Template: ComponentStory<typeof TlFooter> = (args) => <TlFooter {...args} />;

export const PrincipalFooter = Template.bind({});
PrincipalFooter.args = {}