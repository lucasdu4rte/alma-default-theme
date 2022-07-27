import { useEffect, useState } from "react";
import "./App.css";
import {
  Heading,
  useThemeContext,
  Box,
  Flex,
  Divider,
} from "@dasa-health/alma-react";

function App() {
  const { theme } = useThemeContext();
  console.log({ theme });

  const renderColor = (colorHex: string, colorName: string) => {
    return (
      <Flex
        key={`${colorName}-${colorHex}`}
        className="color-group"
        alignItems="center"
      >
        <Box
          className="color-card"
          sx={{
            boxShadow: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
            backgroundColor: colorHex,
            width: "3rem",
            height: "3rem",
            borderRadius: "6px",
            marginRight: 10,
          }}
        />
        <Box sx={{}}>
          <Box fontWeight="semibold">{colorName}</Box>
          <Box>{colorHex}</Box>
        </Box>
      </Flex>
    );
  };
  const filterColorCollection = (collection: object) =>
    Object.entries(collection).filter(([, value]) => typeof value === "string");
  const filterCollection = (collection: object) =>
    Object.entries(collection).filter(([, value]) => typeof value === "object");

  const colorEntries = (
    colorList: Record<string, string | object | undefined>
  ) => Object.entries(colorList);

  const mapColor = (
    colorName: string,
    colorHex: string | object | undefined,
    sourceObject: any
  ): any => {
    if (typeof colorHex === "string") {
      return renderColor(colorHex, colorName);
    }
    if (typeof colorHex === "object") {
      return (
        <>
          <Heading sx={{ textTransform: "capitalize" }}>{colorName}</Heading>

          <div className="card-list">
            {colorEntries(sourceObject).map(([key, value]) =>
              mapColor(key, value, sourceObject[key])
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div className="App">
      <Heading>NavTokens / Default Theme</Heading>

      <Flex flexDirection="column" sx={{ gap: 10 }}>
        <Heading as="h3">Colors</Heading>
        {filterColorCollection(theme.colors).map(([key, value]) =>
          mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Brand / Primary</Heading>
        {filterColorCollection(theme.colors.brand.primary).map(([key, value]) =>
          mapColor(key, value, theme.colors)
        )}
        <Divider />
        <Heading as="h3">Dataviz / Positive</Heading>
        {filterColorCollection(theme.colors.dataviz.positive).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Dataviz / Inverse / Positive</Heading>
        {filterColorCollection(theme.colors.dataviz.inverse.positive).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Dataviz / Inverse / Positive / Shape</Heading>
        {filterColorCollection(theme.colors.dataviz.inverse.positive.shape).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Dataviz / Negative</Heading>
        {filterColorCollection(theme.colors.dataviz.negative).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Dataviz / Inverse / Negative</Heading>
        {filterColorCollection(theme.colors.dataviz.inverse.negative).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Dataviz / Inverse / Negative / Shape</Heading>
        {filterColorCollection(theme.colors.dataviz.inverse.negative.shape).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Divider />
        <Heading as="h3">Feedback / Error </Heading>
        {filterColorCollection(theme.colors.feedback.error).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Heading as="h3">Feedback / Success </Heading>
        {filterColorCollection(theme.colors.feedback.success).map(
          ([key, value]) => mapColor(key, value, theme.colors)
        )}
        <Divider />
      </Flex>

      {/* {filterCollection(theme.colors).map(([key, value]) =>
        mapColor(key, value, theme.colors)
      )} */}
    </div>
  );
}

export default App;
