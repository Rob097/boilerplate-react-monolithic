import tailwindConfig from '@/tailwind.config.js';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import classes from './PageLayout.module.scss';
import Navbar from "@/components/navbar/headerNavbar";
import { Outlet } from 'react-router-dom';

function PageLayout(props) {
    return (
        <Box
            width="100%"
            height="100%"
            minHeight="100vh"
            bgcolor={tailwindConfig.theme.colors.white}
            sx={{ display: 'flow-root', overflowX: { xs: 'hidden', md: "visible" } }}
        >
            <BgVector up />

            <Navbar />
            <Box sx={{
                minHeight: `calc(100vh - 80px)`,
                margin: 0,
                padding: 0,
                width: "100%",
                marginTop: props.top
            }}>
                <Outlet />
            </Box>

            <BgVector />
        </Box>
    );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
    background: "default",
    color: "info",
    top: 10,
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
    ]),
    top: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default PageLayout;

const BgVector = (props) => {
    return (
        <div style={{ position: 'relative', zIndex: 0 }} id={'vector-' + (props.up ? 'up' : 'down')}>
            <div className={props.up ? classes.bgVectorUp : classes.bgVectorDown}>
                <img alt="vector" src="/images/Vector.png" style={{ width: '35em', maxWidth: '100%' }} />
            </div>
            <div className={props.up ? classes.bgVectorUp : classes.bgVectorDown}>
                <img alt="vector-1" src="/images/Vector-1.png" style={{ width: '35em', maxWidth: '100%' }} />
            </div>
            <div className={props.up ? classes.bgVectorUp : classes.bgVectorDown}>
                <img alt="vector-2" src="/images/Vector-2.png" style={{ width: '35em', maxWidth: '100%' }} />
            </div>
        </div>
    )
}