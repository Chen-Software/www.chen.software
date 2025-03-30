"use client";
import { Code } from "app/components/Code";
import { H1, H2, H3, H4, H5, H6 } from "app/components/Heading";
import { Paragraph } from "app/components/Text";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Box, Flex } from "../../../styled-system/jsx";
import type {
	PostConnectionQuery,
	PostQuery,
} from "../../../tina/__generated__/types";
import PostList from "../post-list";

interface ClientPageProps {
	query: string;
	variables: {
		relativePath: string;
	};
	data: PostQuery;
	postListData: PostConnectionQuery;
}

export default function Post(props: ClientPageProps) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	const content = data.post.body;
	return (
		<Flex flexDirection="row" gap={4}>
			<Box minWidth={["128px", "196px", "256px", "320px", "384px"]}>
				<PostList data={props.postListData} sidebarMode={true} />
			</Box>
			<Box>
				<H1 data-tina-field={tinaField(data.post, "title")}>
					{data.post.title}
				</H1>
				<Box data-tina-field={tinaField(data.post, "body")}>
					<TinaMarkdown
						components={{
							h1: H1,
							h2: H2,
							h3: H3,
							h4: H4,
							h5: H5,
							h6: H6,
							p: Paragraph,
							code: Code,
						}}
						content={content}
					/>
				</Box>
			</Box>
		</Flex>
	);
}
