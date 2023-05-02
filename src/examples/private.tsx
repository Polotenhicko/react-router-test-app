import { Redirect, Route, RouteProps } from "react-router-dom";

type Props = {
	Component: React.ComponentType<any>;
	isLoggedIn: boolean;
	rest: RouteProps;
};

const PrivateRoute = ({ Component, isLoggedIn, ...rest }: Props) => (
	<Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);
