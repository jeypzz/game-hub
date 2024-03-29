import React, { useState } from "react";
import { Text, Button } from "@chakra-ui/react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  /* RENDER WHEN THERE IS NO DESCRIPTION */
  if (!children) return null;

  /* RENDER WHEN THE CHILDREN IS SHORT */
  if (children.length <= limit) return <Text>{children}</Text>;

  /* RENDER WHEN THE CHILDREN EXCEED THE LIMIT */
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        marginLeft={1}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
