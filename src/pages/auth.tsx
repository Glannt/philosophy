import { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupName, setSignupName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { loginEmail, loginPassword });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { signupName, signupEmail, signupPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md p-4 shadow-lg">
        <CardHeader className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-500 mb-2">
            <Icon className="w-8 h-8 text-white" icon="lucide:book-open" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Chào mừng trở lại
          </h1>
          <p className="text-muted-foreground text-sm">
            Đăng nhập hoặc tạo tài khoản để tiếp tục học tập
          </p>
        </CardHeader>

        <CardBody>
          <Tabs fullWidth aria-label="Đăng nhập / Đăng ký">
            {/* --- Đăng nhập --- */}
            <Tab key="login" title="Đăng nhập">
              <form className="space-y-4 mt-4" onSubmit={handleLogin}>
                <Input
                  isRequired
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  value={loginEmail}
                  variant="bordered"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />

                <Input
                  isRequired
                  label="Mật khẩu"
                  placeholder="••••••••"
                  type="password"
                  value={loginPassword}
                  variant="bordered"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

                <Button
                  className="w-full"
                  color="primary"
                  type="submit"
                  variant="shadow"
                >
                  Đăng nhập
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Chưa có tài khoản?{" "}
                  <Link color="primary" href="#" underline="hover">
                    Đăng ký ngay
                  </Link>
                </p>
              </form>
            </Tab>

            {/* --- Đăng ký --- */}
            <Tab key="signup" title="Đăng ký">
              <form className="space-y-4 mt-4" onSubmit={handleSignup}>
                <Input
                  isRequired
                  label="Họ và tên"
                  placeholder="Nguyễn Văn A"
                  type="text"
                  value={signupName}
                  variant="bordered"
                  onChange={(e) => setSignupName(e.target.value)}
                />

                <Input
                  isRequired
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  value={signupEmail}
                  variant="bordered"
                  onChange={(e) => setSignupEmail(e.target.value)}
                />

                <Input
                  isRequired
                  label="Mật khẩu"
                  placeholder="••••••••"
                  type="password"
                  value={signupPassword}
                  variant="bordered"
                  onChange={(e) => setSignupPassword(e.target.value)}
                />

                <Button
                  className="w-full"
                  color="secondary"
                  type="submit"
                  variant="shadow"
                >
                  Đăng ký
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Đã có tài khoản?{" "}
                  <Link color="primary" href="#" underline="hover">
                    Đăng nhập
                  </Link>
                </p>
              </form>
            </Tab>
          </Tabs>
        </CardBody>

        <div className="mt-6 text-center">
          <Link color="foreground" href="/" underline="hover">
            ← Quay về trang chủ
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
