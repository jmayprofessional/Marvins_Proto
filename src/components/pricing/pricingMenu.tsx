// src/components/SeafoodSection.tsx
import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { content } from "../../content/content"; // Ensure this content is optimized for multiple items

const PricingMenu: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${content.PricingMenu.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "20px" }}>
        {content.PricingMenu.sectionTitle}
      </Typography>
      <Grid container spacing={2}>
        {content.PricingMenu.seafoodItems.map((item, index) => (
          <Grid item key={index} xs={12}>
            <SeafoodCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SeafoodCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Card
      sx={{
        position: "relative",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 0 0 20px",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {item.name}
        </Typography>
      </CardContent>
      <Box
        sx={{
          backgroundColor: `${content.PricingMenu.seafoodItemsPricingColor}`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '0 20px',
          minWidth: '100px', // Ensures the right side has a minimum width
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {item.price}
        </Typography>
      </Box>
    </Card>
  );
};

export default PricingMenu;
