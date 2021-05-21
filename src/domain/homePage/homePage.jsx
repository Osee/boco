import { Box, Grid, makeStyles, Paper, CssBaseline, Button} from '@material-ui/core';
import { DeviceUnknown, Facebook, WhatsApp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import logo from '../../assets/image/bc.jpeg';
import customerState from '../../atom/customerState';
import { guidId } from '../../helpers/guidId';


const homePageStyle = makeStyles((theme) => ({
    content: {
        width: 350,
        padding: theme.spacing(2),
        margin : theme.spacing(0, "auto"),
        display: "flex",
        flexDirection: "column",
        alignItems :"center",
    },
    container: {
        padding : theme.spacing(1),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.svg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize : "cover",
        backgroundPosition :"left top",
        height: "100vh",
        "&:before": {
            
        }
    },
    imgBox: {
        display: "flex",
        alignItems: "center",
        justifyContent :"center",
        backgroundColor : "#fff",
        margin: theme.spacing(-10, "auto", 2),
        padding: theme.spacing(.7),
        borderRadius: "50%",
        height: 120,
        width: 120,
        "& img": {
            width: "100%",
            borderRadius : "50%"
        }
    },
    groupButton: {
        width : "80%",
        margin : theme.spacing(3, "auto"),
        padding: theme.spacing(1, "auto"),
        "& > button": {
            fontFamily: 'Heko',
            fontSize : 16,
            margin : theme.spacing(1, "auto"),
            color : "#fff"
        },
        "& > button:first-child": {
            background: "#00e676",
        },
        "& > button:nth-child(2)": {
            background: "#1877f2",
            
        },
        "& > button:last-child": {
            color :"#000"
            
        }
        
    }
}))
function HomePage(props) {
    const _date = new Date()
    const classes = homePageStyle();
    const [customer, setCustomer] = useRecoilState(customerState)

    const handleAnonymous = () => {
        const data = {}
        data["username"] = "anonymous"
        data["created"] = _date.getTime()
        data["id"] = guidId("boco")
        setCustomer(s => ({
            ...s,
            currentCustomer : data
        }))
        window.localStorage.setItem("currentUser", JSON.stringify(data))
    }

    useEffect(() => {
        if (customer.currentCustomer !== null) {
            alert("Osée Botendju");
        }
    }, [customer])

    return (
        <Grid className={classes.container}>
            <CssBaseline/>
            <Paper elevation={5} className={classes.content}>
                <Box component="div" className={classes.imgBox} boxShadow={5}>
                    <img src={ logo} alt="Boco - Logo" />
                </Box>
                <Box component="div">
                    <h1>Connectez-vous</h1>
                    <hr />
                </Box>
                <Box component="div" className={classes.groupButton}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<WhatsApp />}
                        
                    >
                        Whatsapp
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Facebook />}
                        
                    >
                        Facebook
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<DeviceUnknown />}
                        onClick={handleAnonymous}
                        
                    >
                        ANONYMOUS
                    </Button>
                </Box>
                <Box component="span">
                    Bongisa Congo - &#169; {_date.getFullYear()}
                </Box>
            </Paper>
        </Grid>
    );
}

export default HomePage;