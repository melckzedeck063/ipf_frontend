import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    CssBaseline,
} from '@mui/material';
import Sidebar2 from '../shared/SideBar2';
import Sidebar from '../shared/SideBar';
import { NavHeader } from '../shared/NavHeader';


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
                    component="aside" 
                    sx={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 40,
                       
                    }}
                >
                    <Sidebar />
                </Box>

                <Box
                    className="bg-gray-100"
                    component="main"
                    sx={{ flexGrow: 1, display: 'flex' }}
                >
                    {loading ? (
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
                        <Box className='ml-8 scroll-my-4' sx={{ width: '100%' }}>
                            {/* <NavHeader  /> */}
                            {children}
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default MainLayout;