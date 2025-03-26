import NextLink, { LinkProps } from "next/link";
import React from "react";
import { Box, BoxProps } from "../../../styled-system/jsx";

export const Link = ({
	children,
	...props
}: LinkProps &
	BoxProps & {
		children?: React.ReactNode;
	}) => {
	return React.createElement(Box, { as: NextLink, ...props }, children);
};

export default Link;
