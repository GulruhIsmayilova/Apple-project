import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface HoverMenuButtonProps {
  label: string;
  submenuItems: string[];
  setIsWrapperOpen: Function;
  setItems: Function;
  submenuSndItems: string[];
  setSndItems: Function;
}

const HoverMenuButton: React.FC<HoverMenuButtonProps> = ({
  label,
  submenuItems,
  setItems,
  setIsWrapperOpen,
  submenuSndItems,
  setSndItems
}) => {
  const handleMouseEnter = () => {
    setItems(submenuItems);
    setSndItems(submenuSndItems)
    setIsWrapperOpen(true);
  };
  const handleMouseLeave = () => {
    setIsWrapperOpen(false);
  };

  return (
    <Box component="main">
      <IconButton
        className="nav-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography variant="body1" sx={{ color: "#fbfbfd" }}>
          {label}
        </Typography>
      </IconButton>
    </Box>
  );
};

export default HoverMenuButton;
