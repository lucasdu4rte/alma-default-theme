import {
  Heading,
  useThemeContext,
  Box,
  Flex,
  Divider,
} from "@dasa-health/alma-react";
import get from "lodash/get";

export function Colors() {
  const { theme } = useThemeContext();

  const filterColorCollection = (collection: object) =>
    Object.entries(collection).filter(([, value]) => typeof value === "string");

  const renderColor = (colorName: string, colorHex: string) => {
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
        <Flex
          flexDirection="column"
          sx={{
            gap: 5,
          }}
        >
          <Box fontWeight="semibold">{colorName}</Box>
          <Box>{colorHex}</Box>
        </Flex>
      </Flex>
    );
  };

  const renderByPath = (path: string) => {
    const colorCollection = path ? get(theme.colors, path) : theme.colors;
    const title = path.split(".").join(" / ");
    return (
      <Flex flexDirection="column" sx={{ gap: 10 }}>
        {title && (
          <Heading as="h3" sx={{ textTransform: "capitalize" }}>
            {title}
          </Heading>
        )}
        <Box
          className="card-list"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: 16,
          }}
        >
          {filterColorCollection(colorCollection).map(([key, value]) =>
            renderColor(key, value)
          )}
        </Box>
      </Flex>
    );
  };

  return (
    <div className="colors">
      <Flex flexDirection="column" sx={{ gap: 14 }}>
        <Heading as="h3" sx={{ textTransform: "capitalize" }}>
          Colors
        </Heading>
        {renderByPath("")}
        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("brand.primary")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("dataviz.positive")}
        {renderByPath("dataviz.inverse.positive")}
        {renderByPath("dataviz.inverse.positive.shape")}
        {renderByPath("dataviz.negative")}
        {renderByPath("dataviz.inverse.negative")}
        {renderByPath("dataviz.inverse.negative.shape")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("feedback.error")}
        {renderByPath("feedback.success")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("interaction.accent")}
        {renderByPath("interaction.blend")}
        {renderByPath("interaction.danger")}
        {renderByPath("interaction.select")}
        {renderByPath("interaction.subtle")}
        {renderByPath("interaction.on.brand.accent")}
        {renderByPath("interaction.on.brand.blend")}
        {renderByPath("interaction.on.brand.danger")}
        {renderByPath("interaction.on.brand.select")}
        {renderByPath("interaction.on.brand.subtle")}
        {renderByPath("interaction.inverse.accent")}
        {renderByPath("interaction.inverse.blend")}
        {renderByPath("interaction.inverse.danger")}
        {renderByPath("interaction.inverse.select")}
        {renderByPath("interaction.inverse.subtle")}
        {renderByPath("interaction.inverse.on.brand.accent")}
        {renderByPath("interaction.inverse.on.brand.blend")}
        {renderByPath("interaction.inverse.on.brand.danger")}
        {renderByPath("interaction.inverse.on.brand.select")}
        {renderByPath("interaction.inverse.on.brand.subtle")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("neutral")}
        {renderByPath("neutral.inverse")}
        {renderByPath("neutral.inverse.on.brand")}
        {renderByPath("neutral.on.brand")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("support")}
        {renderByPath("support.inverse")}
        {renderByPath("support.inverse.on.brand")}
        {renderByPath("support.on.brand")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("typeface")}
        {renderByPath("typeface.inverse")}
        {renderByPath("typeface.inverse.on.brand")}
        {renderByPath("typeface.on.brand")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />

        {renderByPath("palette")}
        {renderByPath("palette.gray")}
        {renderByPath("palette.green")}
        {renderByPath("palette.purple")}
        {renderByPath("palette.red")}
        {renderByPath("palette.yellow")}

        <Divider
          sx={{
            marginTop: theme.space.stack.xxs,
            marginBottom: theme.space.stack.xxs,
          }}
        />
      </Flex>
    </div>
  );
}
