import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { blue, red, grey, green, orange } from "@material-ui/core/colors"

import SignInBg from "../../assets/singup_background_2x.png"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import EazeIcon from "../../assets/eaze_2x.png"
import PersonIcon from "../../assets/person_icon_2x.png"
import MailIcon from "../../assets/mail_icon_2x.png"
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

        "@media (min-width: 780px)": {
            padding: "32px",
        },
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
        borderRadius: 0,
        gridTemplateColumns: "100% 100%",
        "@media (min-width: 780px)": {
            gridTemplateColumns: "30% 70%",
            borderRadius: 8,
        },
    },
    details: {
        position: "relative",
        order: 1,
        "@media (min-width: 780px)": {
            order: 2,
        },
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        position: "relative",
        order: 2,
        "@media (min-width: 780px)": {
            order: 1,
        },
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

    textFeildFocus: {
        borderColor: orange[800],
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
        color: grey[600],
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
    textfieldItem: {
        paddingLeft: "10px",
        paddingRight: "10px",
        "@media (min-width: 780px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
    },
}))

function handleData(key, value, dataStore) {
    dataStore[key] = value
    console.log(key, value)
}

export default function SignUpPage() {
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
            label: "First Name",
            icon: <img src={PersonIcon} className={classes.textFieldIcon} />,
        },
        {
            label: "Last Name",
            icon: <img src={PersonIcon} className={classes.textFieldIcon} />,
        },
        {
            label: "Username",
            icon: <img src={PersonIcon} className={classes.textFieldIcon} />,
        },
        {
            label: "Email",
            icon: <img src={MailIcon} className={classes.textFieldIcon} />,
        },
        {
            label: "Password",
            icon: <img src={PasswordIcon} className={classes.textFieldIcon} />,
            endAdornment: <InputAdornment position="start"></InputAdornment>,
        },
        {
            label: "Confirm Password",
            icon: <img src={PersonIcon} className={classes.textFieldIcon} />,
        },
    ]

    const dataStore = {}

    function performSignUp() {
        if (dataStore["Password"] !== dataStore["Confirm Password"]) {
            return alert("Passwords do not match")
        }

        axios
            .post(
                `${SERVER_BASE_URL}/user/register`,
                {
                    firstName: dataStore["First Name"],
                    lastName: dataStore["Last Name"],
                    username: dataStore["Username"],
                    email: dataStore["Email"],
                    password: dataStore["Password"],
                },
                { "Content-Type": "application/json" }
            )
            .then((result) => {
                console.log(result)
                alert(result.data.success.message)
                history.push("/signIn")
            })
            .catch(function (error) {
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
                    "Somwthing went wrong with API\nCheck console log for details..."
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
            <Grid item xs={12} md={9} lg={9}>
                <Card className={classes.root} vertical-align>
                    <div className={classes.cover}>
                        <img src={EazeIcon} className={classes.eazeLogo} />
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

                            <Link to="/signIn" style={{ marginTop: "24px" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    classes={{ root: classes.greenBtn }}
                                >
                                    &nbsp;&nbsp;&nbsp; SIGN IN &nbsp;&nbsp;&nbsp;
                                </Button>
                            </Link>
                        </Grid>
                    </div>

                    <div className={classes.details}>
                        <Link to="/" className={classes.btnClose}>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <MdClose size={24} />
                            </IconButton>
                        </Link>
                        <Grid
                            container
                            m={0}
                            spacing={2}
                            justify="center"
                            alignItems="center"
                            alignContent="center"
                            direction="column"
                            style={{ minHeight: "100%", padding: "32px" }}
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

                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                alignContent="center"
                                direction="row"
                                overflow
                                className={classes.textfieldItem}
                            >
                                {textFeilds.map((textfield, index) => (
                                    <Grid item lg={6} xs={12}>
                                        <TextField
                                            fullwidth
                                            id="outlined-basic"
                                            placeholder={textfield.label}
                                            variant="outlined"
                                            classes={{
                                                focused: classes.textFeildFocus,
                                            }}
                                            style={{
                                                width: "100%",
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {textfield.icon}
                                                    </InputAdornment>
                                                ),
                                                endAdornment: textfield.endAdornment,
                                            }}
                                            onChange={(e) =>
                                                handleData(
                                                    textfield.label,
                                                    e.target.value,
                                                    dataStore
                                                )
                                            }
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    classes={{ root: classes.greenBtn }}
                                    style={{ marginTop: "24px" }}
                                    onClick={performSignUp}
                                >
                                    &nbsp;&nbsp;&nbsp; SIGN UP &nbsp;&nbsp;&nbsp;
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}
