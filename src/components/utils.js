//func
const rnSquare = (args = null) => ({
  //make the element square
  width: args,
  height: args
});
const rnSetPosition = (pos = "center", axis = "column", node = "children") => {
  const n = node ? node : "children";
  const nodes = {
    align: { children: "alignItems", self: "alignSelf" },
    justify: {}
  };

  //row axis
  if (axis === "row") {
    switch (pos) {
      case "top":
        return {
          alignItems: "flex-start",
          justifyContent: "center"
        };
      case "top-left":
        return {
          alignItems: "flex-start",
          justifyContent: "flex-start"
        };
      case "top-right":
        return {
          alignItems: "flex-start",
          justifyContent: "flex-end"
        };
      case "right":
        return {
          alignItems: "center",
          justifyContent: "flex-end"
        };
      case "bottom":
        return {
          alignItems: "flex-end",
          justifyContent: "center"
        };
      case "bottom-left":
        return {
          alignItems: "flex-end",
          justifyContent: "flex-start"
        };
      case "bottom-right":
        return {
          alignItems: "flex-end",
          justifyContent: "flex-end"
        };
      case "left":
        return {
          alignItems: "center",
          justifyContent: "flex-start"
        };
    }
  }

  //default case
  switch (pos) {
    case "top":
      return {
        alignItems: "center",
        justifyContent: "flex-start"
      };
    case "top-left":
      return {
        alignItems: "flex-start",
        justifyContent: "flex-start"
      };
    case "top-right":
      return {
        alignItems: "flex-end",
        justifyContent: "flex-start"
      };
    case "right":
      return {
        alignItems: "flex-end",
        justifyContent: "center"
      };

    case "left":
      return {
        alignItems: "flex-start",
        justifyContent: "center"
      };

    case "bottom":
      return {
        alignItems: "center",
        justifyContent: "flex-end"
      };
    case "bottom-left":
      return {
        alignItems: "flex-start",
        justifyContent: "flex-end"
      };
    case "bottom-right":
      return {
        alignItems: "flex-end",
        justifyContent: "flex-end"
      };
  }

  //center if no position setup
  return {
    justifyContent: "center",
    alignItems: "center"
  };
};

//static
const rnFill = {
  ...rnSquare(),
  flex: 1
};

export { rnSquare, rnFill, rnSetPosition };
