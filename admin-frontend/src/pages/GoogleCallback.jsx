import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const _id = searchParams.get("id");

    if (token) {
      // Save to Zustand & LocalStorage
      setAuth({ _id, name, email }, token);
      toast.success("Google Login Successful!");
      navigate("/dashboard");
    } else {
      toast.error("Google Login Failed");
      navigate("/login");
    }
  }, [searchParams, setAuth, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f8]">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#135bec]"></div>
        <p className="text-[#616f89] font-medium">
          Authenticating with Google...
        </p>
      </div>
    </div>
  );
};

export default GoogleCallback;
