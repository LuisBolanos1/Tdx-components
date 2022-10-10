import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";


export default {
    title: 'UI/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const PrincipalFooter = Template.bind({});
PrincipalFooter.args = {}