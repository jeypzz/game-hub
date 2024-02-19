import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#CCD3CA">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="#B5C0D0">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
