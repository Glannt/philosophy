import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeInUp, slideUpLoop } from "@/utils/motionVariants";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div className="min-h-screen">
        {/* MAIN CONTENT */}
        <main>
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                {/* Hero Icon */}
                <motion.div
                  animate="animate"
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-primary-200 mb-6"
                  variants={slideUpLoop}
                >
                  <Icon
                    className="h-10 w-10 text-primary-foreground"
                    icon="lucide:graduation-cap"
                  />
                </motion.div>
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-500 bg-clip-text text-transparent animate-fade-in-up">
                  <motion.h1
                    animate="visible"
                    className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent"
                    initial="hidden"
                    variants={fadeInUp}
                  >
                    Kinh tế thị trường định hướng xã hội chủ nghĩa
                  </motion.h1>
                </h1>

                {/* Subtitle */}
                <motion.p
                  animate="visible"
                  className="text-xl text-primary-500 mb-8 font-extrabold max-w-2xl mx-auto"
                  initial="hidden"
                  transition={{ delay: 0.2 }}
                  variants={fadeInUp}
                >
                  Tìm hiểu về nền kinh tế Việt Nam và các quan hệ lợi ích kinh
                  tế trong bối cảnh hội nhập quốc tế
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
                  <motion.div
                    animate="visible"
                    className="flex gap-4 justify-center"
                    initial="hidden"
                    transition={{ delay: 0.4 }}
                    variants={fadeInUp}
                  >
                    <Link as="button" href="/section1">
                      <Button
                        className="bg-gradient-to-r from-primary to-primary-200 hover:opacity-90 hover:scale-105 transition-all duration-300"
                        color="primary"
                        size="lg"
                        onPress={() => navigate("/section1")}
                      >
                        Bắt đầu học
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-500 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
                Nội dung chương học
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[1, 2, 3].map((i, idx) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    transition={{ delay: 0.1 * idx }}
                    variants={fadeInUp}
                    whileInView="visible"
                  >
                    <Link href={`/section${i}`}>
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 h-full group">
                        <div
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow 
      flex items-center justify-center mb-4 
      group-hover:scale-110 transition-transform duration-1200 
      animate-slide-down-loop"
                        >
                          <Icon
                            className="h-6 w-6 text-primary-foreground"
                            icon={
                              i === 1
                                ? "lucide:book-open"
                                : i === 2
                                  ? "lucide:file-text"
                                  : "lucide:brain"
                            }
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          Phần {i}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {i === 1
                            ? "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam"
                            : i === 2
                              ? "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa"
                              : "Các quan hệ lợi ích kinh tế ở Việt Nam"}
                        </p>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
              >
                <Card className="p-8 md:p-12 border-2 border-primary/40 animate-fade-in shadow-2xl shadow-blue-900">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground animate-fade-in-up">
                      Sẵn sàng kiểm tra kiến thức của bạn?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:forwards]">
                      Hoàn thành bài kiểm tra để đánh giá mức độ hiểu biết của
                      bạn về nội dung chương học
                    </p>
                    <div className="animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
                      <Button
                        className="bg-gradient-to-r from-accent to-accent/50 hover:scale-105 transition-all duration-600 font-bold text-muted-foreground hover:opacity-70 hover:shadow-lg hover:shadow-accent/40"
                        color="primary"
                        size="lg"
                        variant="light"
                        onPress={() => navigate("/quiz")}
                      >
                        Làm bài kiểm tra ngay
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
