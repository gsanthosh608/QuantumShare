// import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label }
//     from 'recharts';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import CallMadeIcon from '@mui/icons-material/CallMade';
// import CallReceivedIcon from '@mui/icons-material/CallReceived';
// import { PieChart } from '@mui/x-charts';
// import Nav from '../Navbar/Nav';
// import Sidenav from '../Navbar/Sidenav';

// const Analytics = () => {

//     const data = [
//         {
//             name: 'Jan',
//             competitors: 13,
//             followers: 24,
//             no: 50,
//         },
//         {
//             name: 'Feb',
//             competitors: 21,
//             followers: 13,

//         },
//         {
//             name: 'Mar',
//             competitors: 32,
//             followers: 8,

//         },
//         {
//             name: 'Apr',
//             competitors: 43,
//             followers: 39,

//         },
//         {
//             name: 'May',
//             competitors: 25,
//             followers: 40,

//         },
//         {
//             name: 'Jun',
//             competitors: 16,
//             followers: 30,

//         },
//     ];

//     return (
//         <div>
//             <Nav />
//             <div style={{ display: 'flex' }}>
//                 <Sidenav />
//                 <Box sx={{ flexGrow: 1, marginLeft: '1rem' }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={12} lg={12}>
//                             <div style={{ backgroundColor: 'white', padding: '20px' }}>
//                                 <h5 >Performance Summary</h5>
//                                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Profile Visitors</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>621</p>
//                                             <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
//                                             <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>52.4%</p>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Post View Counts</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>7,256</p>
//                                             <CallReceivedIcon sx={{ marginTop: '30px', fontSize: 16, color: 'red' }} />
//                                             <p style={{ color: 'red', fontSize: 10, marginTop: '30px' }}>5.2%</p>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Engagement</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>23,142</p>
//                                             <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
//                                             <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>72.3%</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12} md={6} lg={6}>
//                             <div className='charts' style={{ background: 'white', padding: '20px', margin: '0px', marginTop: '0px' }}>
//                                 <ResponsiveContainer width="100%" height="100%" >
//                                     <BarChart
//                                         width={500}
//                                         height={300}
//                                         data={data}
//                                         margin={{
//                                             top: 10,
//                                             right: 30,
//                                             left: 10,
//                                             bottom: 0,
//                                         }}
//                                     >
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="name" />
//                                         <YAxis >
//                                             <Label value="Activity In Percentage" angle={-90} position="insideLeft" offset={0} style={{ textAnchor: 'middle' }} />
//                                         </YAxis>
//                                         <Tooltip />
//                                         <Legend />
//                                         <Bar dataKey="followers" fill="#d9686e" />
//                                         <Bar dataKey="competitors" fill="#f5cbcd" />
//                                     </BarChart>
//                                 </ResponsiveContainer>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12} md={6} lg={6} >
//                             <div style={{ background: '#fff', padding: '20px' }}>
//                                 <p>Post Engagement</p>
//                                 <div style={{ padding: '18px' }}>
//                                     <PieChart
//                                         series={[
//                                             {
//                                                 data: [
//                                                     { id: 0, value: 10, label: 'Text', color: '#e48d91' },
//                                                     { id: 1, value: 15, label: 'Image', color: '#f5cbcd' },
//                                                     { id: 2, value: 20, label: 'Video', color: '#d9686e' },
//                                                 ],
//                                             },
//                                         ]}
//                                         width={400}
//                                         height={200}
//                                     />
//                                 </div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12} md={12} lg={12}>
//                             <div style={{ backgroundColor: 'white', padding: '20px' }}>
//                                 <h5 >Audience Summary</h5>
//                                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Followers</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>1423</p>
//                                             <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
//                                             <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>20.1%</p>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Likes</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>5,642</p>
//                                             <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
//                                             <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>41.1%</p>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Comments</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>1,023</p>
//                                             <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
//                                             <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>32.0%</p>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
//                                         <p style={{ fontSize: 16 }}>Dislikes</p>
//                                         <div style={{ display: 'flex' }}>
//                                             <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>20</p>
//                                             <CallReceivedIcon sx={{ marginTop: '30px', fontSize: 16, color: 'red' }} />
//                                             <p style={{ color: 'red', fontSize: 10, marginTop: '30px' }}>8.6%</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </div>
//         </div>
//     )
// }

// export default Analytics





import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
import axiosInstance from '../Helper/AxiosInstance';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Share } from '@mui/icons-material';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import facebookIcon from '../Assets/facebook.svg';
import instagramIcon from '../Assets/instagram.svg';
import { ReactSVG } from 'react-svg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { PieChart } from '@mui/x-charts';

const Analytics = () => {
    let token = sessionStorage.getItem("token");
    const [recentPosts, setRecentPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axiosInstance.get('/quatumshare/socialmedia/history', {
                    headers: {
                        'Accept': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
                setRecentPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching analytics data", error);
            }
        };

        fetchAnalyticsData();
    }, [token]);

    const handleViewInsights = async (pid) => {
        try {
            const response = await axiosInstance.get(`/quatumshare/socialmedia/view/analytics?pid=${pid}`, {
                headers: {
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            setSelectedPost(response.data);
            setOpen(true);
        } catch (error) {
            console.error("Error fetching post insights", error);
        }
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPost(null);
    };

    const getPlatformIcon = (platformName) => {
        switch (platformName.toLowerCase()) {
            case 'facebook':
                return <ReactSVG src={facebookIcon} alt="Facebook" />;
            case 'instagram':
                return <ReactSVG src={instagramIcon} alt="Instagram" />;
            default:
                return null;
        }
    };

    const iconStyle = {
        position: 'absolute',
        top: '55%',
        right: '10px',
        objectFit: 'contain',
        transform: 'translateY(-50%)',
    };

    const data = [
        {
            name: 'Jan',
            competitors: 13,
            followers: 24,
            no: 50,
        },
        {
            name: 'Feb',
            competitors: 21,
            followers: 13,
        },
        {
            name: 'Mar',
            competitors: 32,
            followers: 8,
        },
        {
            name: 'Apr',
            competitors: 43,
            followers: 39,
        },
        {
            name: 'May',
            competitors: 25,
            followers: 40,
        },
        {
            name: 'Jun',
            competitors: 16,
            followers: 30,
        },
    ];

    return (
        <>
            <div>
                <Nav />
                <div style={{ display: 'flex' }}>
                    <Sidenav />
                    <div>
                        <Box sx={{ flexGrow: 1, marginLeft: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
                                        <h2 style={{ color: '#ba343b', fontSize: '1.4rem' }}>
                                            Recent Posts
                                        </h2><br />
                                        <Grid container spacing={2}>
                                            {recentPosts.filter(post => post.imageUrl).length > 0 ? (
                                                recentPosts
                                                    .filter(post => post.imageUrl)
                                                    .map(post => (
                                                        <Grid item xs={2.4} key={post.pid}>
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    border: '1px #ddd',
                                                                    borderRadius: '8px',
                                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                                    padding: '6px',
                                                                    width: '100%',
                                                                    height: '240px',
                                                                    textAlign: 'center',
                                                                    backgroundColor: '#f9f9f9',
                                                                    transition: 'transform 0.3s ease-in-out',
                                                                    position: 'relative',
                                                                }}
                                                            >
                                                                {post.mediaType.startsWith('video') ? (
                                                                    <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                                                                        <video
                                                                            src={post.imageUrl}
                                                                            alt={`Video post on ${post.platformName}`}
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '180px',
                                                                                objectFit: 'contain',
                                                                                borderRadius: '4px',
                                                                                marginBottom: '10px',
                                                                            }}
                                                                        />
                                                                        <div
                                                                            style={{
                                                                                border: '2px solid white',
                                                                                position: 'absolute',
                                                                                top: '50%',
                                                                                left: '50%',
                                                                                transform: 'translate(-50%, -50%)',
                                                                                width: '40px',
                                                                                height: '40px',
                                                                                borderRadius: '50%',
                                                                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                zIndex: 1,
                                                                            }}
                                                                        >
                                                                            <button
                                                                                style={{
                                                                                    position: 'relative',
                                                                                    bottom: '1px',
                                                                                    left: '2px',
                                                                                    backgroundColor: 'transparent',
                                                                                    color: 'white',
                                                                                    border: 'none',
                                                                                    fontSize: '18px',
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                            >
                                                                                ▶
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <img
                                                                        src={post.imageUrl}
                                                                        alt={`Post on ${post.platformName}`}
                                                                        style={{
                                                                            width: '100%',
                                                                            height: '180px',
                                                                            objectFit: 'contain',
                                                                            borderRadius: '4px',
                                                                            marginBottom: '10px'
                                                                        }}
                                                                    />
                                                                )}
                                                                <div
                                                                    style={{
                                                                        position: 'absolute',
                                                                        top: '-4px',
                                                                        right: '-4px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        width: '27px',
                                                                        height: '27px',
                                                                    }}
                                                                >
                                                                    {getPlatformIcon(post.platformName)}
                                                                </div>
                                                                <button
                                                                    onClick={() => handleViewInsights(post.pid)}
                                                                    style={{
                                                                        backgroundColor: '#fff',
                                                                        color: '#ba343b',
                                                                        border: '1px solid #ba343b',
                                                                        borderRadius: '4px',
                                                                        width: '7rem',
                                                                        height: '2.2rem',
                                                                        cursor: 'pointer',
                                                                        fontSize: '14px',
                                                                        fontWeight: '600',
                                                                        marginTop: '1px'
                                                                    }}
                                                                >
                                                                    View Insights
                                                                </button>
                                                            </div>
                                                        </Grid>
                                                    ))
                                            ) : (
                                                <div style={{ margin: '0 16px' }}>
                                                    <p>No Recent Posts Available.</p>
                                                </div>
                                            )}
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, marginLeft: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                        <h2 style={{ color: '#ba343b', fontSize: '1.4rem' }}>
                                            Performance Summary
                                        </h2>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Profile Visitors</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>621</p>
                                                    <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
                                                    <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>52.4%</p>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Post View Counts</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>7,256</p>
                                                    <CallReceivedIcon sx={{ marginTop: '30px', fontSize: 16, color: 'red' }} />
                                                    <p style={{ color: 'red', fontSize: 10, marginTop: '30px' }}>5.2%</p>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Engagement</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>23,142</p>
                                                    <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
                                                    <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>72.3%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <div className='charts' style={{ background: 'white', padding: '20px', margin: '0px', marginTop: '0px' }}>
                                        <ResponsiveContainer width="100%" height="100%" >
                                            <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                margin={{
                                                    top: 10,
                                                    right: 30,
                                                    left: 10,
                                                    bottom: 0,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis >
                                                    <Label value="Activity In Percentage" angle={-90} position="insideLeft" offset={0} style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="followers" fill="#d9686e" />
                                                <Bar dataKey="competitors" fill="#f5cbcd" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} >
                                    <div style={{ background: '#fff', padding: '20px' }}>
                                        <p>Post Engagement</p>
                                        <div style={{ padding: '18px' }}>
                                            <PieChart
                                                series={[
                                                    {
                                                        data: [
                                                            { id: 0, value: 10, label: 'Text', color: '#e48d91' },
                                                            { id: 1, value: 15, label: 'Image', color: '#f5cbcd' },
                                                            { id: 2, value: 20, label: 'Video', color: '#d9686e' },
                                                        ],
                                                    },
                                                ]}
                                                width={400}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                        <h2 style={{ color: '#ba343b', fontSize: '1.4rem' }}>
                                            Audience Summary
                                        </h2>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Followers</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>1423</p>
                                                    <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
                                                    <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>20.1%</p>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Likes</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>5,642</p>
                                                    <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
                                                    <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>41.1%</p>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Comments</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>1,023</p>
                                                    <CallMadeIcon sx={{ marginTop: '30px', fontSize: 16, color: 'green' }} />
                                                    <p style={{ color: 'green', fontSize: 10, marginTop: '30px' }}>32.0%</p>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '10px', border: 1, borderStyle: 'ridge', padding: '15px', width: '100%' }}>
                                                <p style={{ fontSize: 16 }}>Dislikes</p>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={{ color: '#000066', fontWeight: 'bold', fontSize: 30, margin: '10px' }}>20</p>
                                                    <CallReceivedIcon sx={{ marginTop: '30px', fontSize: 16, color: 'red' }} />
                                                    <p style={{ color: 'red', fontSize: 10, marginTop: '30px' }}>8.6%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <DialogTitle sx={{ color: '#ba343b', fontSize: '1.2rem', fontWeight: '600', position: 'relative', paddingRight: '70px' }}>
                        Post Insights
                        {selectedPost && (
                            <>
                                {selectedPost.platform === 'instagram' && (
                                    <ReactSVG src={instagramIcon} alt="Instagram" style={iconStyle} />
                                )}
                                {selectedPost.platform === 'facebook' && (
                                    <ReactSVG src={facebookIcon} alt="Facebook" style={iconStyle} />
                                )}
                            </>
                        )}
                    </DialogTitle>
                    <DialogContent dividers>
                        {selectedPost && (
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    {selectedPost.data.media_type === 'video' ? (
                                        <video
                                            src={selectedPost.data.full_picture}
                                            alt="Post"
                                            style={{ width: '100%', height: '250px', borderRadius: '4px', objectFit: 'contain' }}
                                            controls
                                        />
                                    ) : (
                                        <img
                                            src={selectedPost.data.full_picture}
                                            alt="Post"
                                            style={{ width: '100%', height: '250px', borderRadius: '4px', objectFit: 'contain' }}
                                        />
                                    )}
                                    <br /><br />
                                    <p>{selectedPost.data.description}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    {/* Facebook */}
                                    {selectedPost.data.total_comments !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <CommentOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Comments : {selectedPost.data.total_comments}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.love !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <FavoriteBorderOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Love : {selectedPost.data.love}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.like !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <ThumbUpAltOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Likes : {selectedPost.data.like}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.total_video_views !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <VisibilityOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Views : {selectedPost.data.total_video_views}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.total_video_impressions !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <TrendingUpOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Impressions : {selectedPost.data.total_video_impressions}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.reactions !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <SentimentVerySatisfiedOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Reactions : {selectedPost.data.reactions}</span>
                                        </p>
                                    )}
                                    {/* Instagram */}
                                    {selectedPost.data.comments !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <CommentOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Comments : {selectedPost.data.comments}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.likes !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <FavoriteBorderOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Likes : {selectedPost.data.likes}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.shares !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Share sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Shares : {selectedPost.data.shares}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.saved !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <BookmarksOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Saved : {selectedPost.data.saved}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.reach !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <TrendingUpOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Reach : {selectedPost.data.reach}</span>
                                        </p>
                                    )}
                                    {selectedPost.data.video_views !== undefined && (
                                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <VisibilityOutlinedIcon sx={{ color: 'grey', fontSize: '20px', marginRight: '8px' }} />
                                            <span style={{ fontWeight: '600' }}>Views : {selectedPost.data.video_views}</span>
                                        </p>
                                    )}
                                </Grid>
                            </Grid>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default Analytics;