import React, { createContext, useContext, useEffect, useState } from "react";
import { addToast } from "@heroui/toast";

const API_URL = import.meta.env.VITE_API_URL ?? "";

console.log("api url", API_URL);

// 🧩 Định nghĩa kiểu dữ liệu user
interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Kiểm tra token khi app load
  useEffect(() => {
    verify();
  }, []);

  // ---- Verify token ----
  const verify = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);

      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "verify", token }),
      });
      const result = await res.json();

      if (result.success) {
        setUser({ name: result.name, email: result.email });
      } else {
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ---- Handle Login ----
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", email, password }),
      });
      const result = await res.json();

      if (result.success) {
        localStorage.setItem("token", result.token);
        setUser({ name: result.name, email: result.email });
        addToast({
          title: `Xin chào, ${result.name}!`,
          color: "success",
          timeout: 2000,
        });

        return true;
      } else {
        addToast({
          title: result.message || "Đăng nhập thất bại!",
          color: "warning",
          timeout: 2000,
        });

        return false;
      }
    } catch (err) {
      console.error(err);
      addToast({
        title: "Lỗi kết nối khi đăng nhập.",
        color: "danger",
        timeout: 2000,
      });

      return false;
    }
  };

  // ---- Handle Signup ----
  const signup = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "signup", name, email, password }),
      });
      const result = await res.json();

      if (result.success) {
        addToast({
          title: "Đăng ký thành công! Bạn có thể đăng nhập ngay.",
          color: "success",
          timeout: 2000,
        });

        return true;
      } else {
        addToast({
          title: result.message || "Đăng ký thất bại!",
          color: "warning",
          timeout: 2000,
        });

        return false;
      }
    } catch (err) {
      console.error(err);
      addToast({
        title: "Lỗi kết nối khi đăng ký.",
        color: "danger",
        timeout: 2000,
      });

      return false;
    }
  };

  // ---- Handle Logout ----
  const logout = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "logout", token }),
      });
    } catch (err) {
      console.error(err);
    }

    localStorage.removeItem("token");
    setUser(null);
    addToast({
      title: "Đã đăng xuất!",
      color: "warning",
      timeout: 1500,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signup, logout, verify, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook tiện lợi để sử dụng trong các component khác
export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");

  return ctx;
};
