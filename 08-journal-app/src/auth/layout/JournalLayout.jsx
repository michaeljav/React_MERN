import { Box, Toolbar } from '@mui/material';

import { NavBar, SideBar } from './components';

/** */

const drawerWith = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <NavBar drawerWith={drawerWith} />
      {/* Sidebar drawerWith */}
      <SideBar drawerWith={drawerWith} />
      {/* En ves de un div que sea la etiqueta  main */}
      <Box component='main' sx={{ flexGrowl: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
