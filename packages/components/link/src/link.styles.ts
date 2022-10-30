import {styled} from "@nextui-org/system";
import {cssFocusVisible} from "@nextui-org/shared-css";

export const StyledLink = styled(
  "a",
  {
    display: "inline-flex",
    alignItems: "center",
    lineHeight: "inherit",
    textDecoration: "none",
    width: "fitContent",
    backgroundColor: "transparent",
    backgroundImage: "inherit",
    backgroundClip: "inherit",
    WebkitTextFillColor: "inherit",
    color: "$$linkColor",
    outline: "none",
    maxW: "max-content",
    "&:hover": {
      opacity: 0.8,
    },
    "@motion": {
      transition: "none",
    },
    variants: {
      underline: {
        true: {
          "&:hover, &:active, &:focus": {
            textDecoration: "underline",
          },
        },
      },
      animated: {
        true: {
          transition: "opacity 0.2s ease 0s, background 0.2s ease 0s",
        },
      },
    },
  },
  cssFocusVisible,
);