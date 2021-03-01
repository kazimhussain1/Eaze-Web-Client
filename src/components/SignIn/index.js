import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { blue, red, grey, green } from "@material-ui/core/colors"

import SignInBg from "../../assets/signin-background.png"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import EazeIcon from "../../assets/eaze_2x.png"
import PersonIcon from "../../assets/person_icon_2x.png"
import PasswordIcon from "../../assets/password_icon_2x.png"
import {
    Grid,
    Fab,
    TextField,
    InputAdornment,
    Button,
    IconButton,
} from "@material-ui/core"
import { useHistory, Link } from "react-router-dom"

import { SERVER_BASE_URL } from "../../config"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh",
        backgroundColor: "antiquewhite",
    },

    //   .center-vertical {
    //     margin: 0;
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     -ms-transform: translate(-50%, -50%);
    //     transform: translate(-50%, -50%);
    //   }
    root: {
        display: "grid",
        minHeight: "70vh",
        borderRadius: 8,
        gridTemplateColumns: "70% 30%",
    },
    details: { position: "relative" },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        position: "relative",
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    socialLoginBtn: {
        marginLeft: "8px",
        marginRight: "8px",
    },
    fabFacebook: {
        color: theme.palette.common.white,
        backgroundColor: blue[800],
        "&:hover": {
            backgroundColor: blue[900],
        },
    },

    fabGoogle: {
        color: theme.palette.common.white,
        backgroundColor: red[500],
        "&:hover": {
            backgroundColor: red[600],
        },
    },

    fabLinkedIn: {
        color: theme.palette.common.white,
        backgroundColor: blue[700],
        "&:hover": {
            backgroundColor: blue[800],
        },
    },

    textFieldIcon: {
        width: "16px",
    },

    eazeLogo: {
        position: "absolute",
        top: "16px",
        left: "16px",
        // color: grey[300],
        width: "80px",
        zIndex: 5,
    },

    btnClose: {
        position: "absolute",
        top: "12px",
        right: "12px",
        color: grey[300],
        zIndex: 5,
    },

    greenBtn: {
        paddingLeft: "40px",
        paddingRight: "40px",
        color: theme.palette.common.white,
        backgroundColor: green[800],
        "&:hover": {
            backgroundColor: green[900],
        },
    },
}))

function handleData(key, value, dataStore) {
    dataStore[key] = value
    console.log(key, value)
}

export default function SignInPage() {
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()

    const Fabs = [
        {
            color: "inherit",
            className: clsx(classes.fabFacebook, classes.socialLoginBtn),
            icon: <FaFacebookF size={24} />,
            label: "Facebook",
        },
        {
            color: "inherit",
            className: clsx(classes.fabGoogle, classes.socialLoginBtn),
            icon: <FaGooglePlusG size={32} />,
            label: "Google",
        },
        {
            color: "inherit",
            className: clsx(classes.fabLinkedIn, classes.socialLoginBtn),
            icon: <FaLinkedinIn size={24} />,
            label: "Linked In",
        },
    ]
    const textFeilds = [
        {
            label: "Username or Email",
            icon: <img src={PersonIcon} className={classes.textFieldIcon} />,
            data: "",
        },
        {
            label: "Password",
            icon: <img src={PasswordIcon} className={classes.textFieldIcon} />,
            endAdornment: <InputAdornment position="start"></InputAdornment>,
            data: "",
        },
    ]

    const dataStore = {
        "Username or Email": "",
        Password: "",
    }

    function performSignIn() {
        axios
            .post(
                `${SERVER_BASE_URL}/user/login`,
                {
                    email: dataStore["Username or Email"],
                    password: dataStore["Password"],
                },
                { "Content-Type": "application/json" }
            )
            .then((result) => {
                if (typeof Storage !== "undefined") {
                    localStorage.setItem("token", result.data.success.token)

                    history.push("/dashboard")
                    console.log(result)
                } else {
                    alert("Web Browser not supported")
                }
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request)
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message)
                }

                console.log(error.config)
                alert(
                    "Something went wrong with API\nCheck console log for details..."
                )
            })
    }

    return (
        <Grid
            container
            m={0}
            spacing={0}
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <Grid item xs={11} md={9} lg={9}>
                <Card className={classes.root} vertical-align>
                    <div className={classes.details}>
                        <img src={EazeIcon} className={classes.eazeLogo} />
                        <Grid
                            container
                            m={0}
                            spacing={2}
                            justify="center"
                            alignItems="center"
                            alignContent="center"
                            direction="column"
                            style={{ minHeight: "100%", position: "absolute" }}
                        >
                            <Grid item>
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    align="center"
                                >
                                    Sign in to Eaze
                                </Typography>
                            </Grid>

                            <Grid item>
                                {Fabs.map((fab, index) => (
                                    <Fab
                                        key={index}
                                        aria-label={fab.label}
                                        className={fab.className}
                                        color={fab.color}
                                    >
                                        {fab.icon}
                                    </Fab>
                                ))}
                            </Grid>

                            <Grid item>
                                <Typography
                                    component="h6"
                                    variant="h6"
                                    align="center"
                                >
                                    <br />
                                    or use your email/username
                                </Typography>
                            </Grid>

                            {textFeilds.map((textfield, index) => (
                                <TextField
                                    key={index}
                                    id="outlined-basic"
                                    placeholder={textfield.label}
                                    variant="outlined"
                                    style={{
                                        width: "50%",
                                        minWidth: "200px",
                                        margin: "4px",
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                {textfield.icon}
                                            </InputAdornment>
                                        ),
                                        endAdornment: textfield.endAdornment,
                                    }}
                                    onChange={(e) => {
                                        handleData(
                                            textfield.label,
                                            e.target.value,
                                            dataStore
                                        )
                                    }}
                                />
                            ))}

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                classes={{ root: classes.greenBtn }}
                                style={{ marginTop: "24px" }}
                                onClick={() => {
                                    performSignIn()
                                }}
                            >
                                &nbsp;&nbsp;&nbsp; SIGN IN &nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                    </div>

                    <div className={classes.cover}>
                        <Link to="/" className={classes.btnClose}>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <MdClose size={24} />
                            </IconButton>
                        </Link>

                        <CardMedia
                            image={SignInBg}
                            title="Live from space album cover"
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                            }}
                        />

                        <Grid
                            container
                            m={0}
                            spacing={2}
                            justify="center"
                            alignItems="center"
                            alignContent="center"
                            direction="column"
                            style={{
                                minHeight: "100%",
                                zIndex: 1,
                                position: "absolute",
                                padding: "32px",
                            }}
                        >
                            <Grid item>
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    align="center"
                                >
                                    Hello, Friend!
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography
                                    component="p"
                                    variant="body2"
                                    align="start"
                                    style={{
                                        marginLeft: "24px",
                                        marginRight: "24px",
                                    }}
                                >
                                    Enter your details and start your journey with
                                    us.
                                </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: "24px" }}>
                                <Link to="/register">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        classes={{ root: classes.greenBtn }}
                                    >
                                        &nbsp;&nbsp;&nbsp; SIGN UP &nbsp;&nbsp;&nbsp;
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}
