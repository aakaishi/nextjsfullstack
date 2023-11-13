import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet"; 
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
  tag: any; //Fix the any type after
  children: React.ReactNode;
  styleSheet: StyleSheet; //StyleSheet is another interface
}

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const componentTag = tag || 'div'; 

  return (
    <BaseComponent as={Tag} style={styleSheet}>
      {children}
    </BaseComponent>
  );
}
