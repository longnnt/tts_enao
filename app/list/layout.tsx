import { Flex } from "antd";
import React from "react";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flex>{children}</Flex>;
}
