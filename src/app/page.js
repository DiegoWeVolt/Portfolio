"use client";

import { Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<Flex padding="15px">
			<Flex w="full" align="center" justify="flex-start">
				<Image src="/dahmotta.svg" alt="logo" width="50px" />
				<Text ml="15px" fontWeight="bold" fontSize="25px">
					DahMotta Tecnologia
				</Text>
			</Flex>
		</Flex>
	);
}
