
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingElement from "@/components/FloatingElement";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-gray">
      <div className="text-center p-8 glass rounded-2xl max-w-md mx-auto">
        <FloatingElement>
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="rounded-full bg-primary-purple text-white hover:bg-secondary-purple">
              Return to Home
            </Button>
          </Link>
        </FloatingElement>
      </div>
    </div>
  );
};

export default NotFound;
