import { useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth/useAuth";
import { Navigate } from "react-router-dom";

interface Props extends React.ComponentProps<'div'> {}

const ProtectedComponent:  React.FC<Props> = ({ children }: Props) => {
  const { isAuth } = useAuth();
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        setIsAuthenticatedState(await isAuth());
        setLoading(false);
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return isAuthenticatedState ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedComponent;
