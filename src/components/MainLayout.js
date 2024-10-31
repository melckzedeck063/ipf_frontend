import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    CssBaseline,
} from '@mui/material';
import { SideBar } from './SideBar';
import Sidebar2 from './SideBar2';

function MainLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // Simulate loading for 2.5 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full" style={{ overflowX: 'hidden' }}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    className="bg-gray-100"
                    component="aside" // Change div to aside
                    sx={{
                        position: 'sticky', // Make it sticky
                        top: 0,
                        zIndex: 40, // Adjust zIndex as needed
                       
                    }}
                >
                    <Sidebar2 />
                </Box>

                <Box
                    className="bg-gray-100"
                    component="main"
                    sx={{ flexGrow: 1, display: 'flex' }}
                >
                    {loading ? (
                        // Show loader if loading is true
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(150, 150, 150, 0.8)',
                                zIndex: 9999,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Box sx={{ width: '100%' }}>
                            {/* <NavBar2 /> */}
                            {children}
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default MainLayout;