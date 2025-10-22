// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/UserContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // ⏳ Hiển thị khi đang kiểm tra login
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Đang kiểm tra đăng nhập...
      </div>
    );
  }

  // ❌ Nếu chưa login thì redirect về trang /auth
  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  // ✅ Nếu đã login thì cho phép vào route con
  return <>{children}</>;
};
