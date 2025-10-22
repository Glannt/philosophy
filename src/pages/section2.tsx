import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
  hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
};

const subCardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const Section2 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* --- Tiêu đề chương --- */}
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-300 bg-clip-text text-transparent animate-fade-in-left [animation-delay:100ms]">
              2. Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ
              nghĩa
            </h1>

            {/* --- 2.1. Sự cần thiết --- */}
            <motion.div
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              whileInView="visible"
            >
              <Card className="p-6 border-l-4 border-primary animate-fade-in-up [animation-delay:200ms] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-bounce">
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:alert-circle"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary animate-fade-in-up [animation-delay:250ms]">
                    2.1. Sự cần thiết
                  </h2>
                </div>

                <p className="mb-4 leading-relaxed text-foreground animate-fade-in-up [animation-delay:300ms]">
                  Việc hoàn thiện thể chế là một yêu cầu cấp bách vì hệ thống
                  thể chế kinh tế thị trường ở Việt Nam vẫn còn nhiều hạn chế:
                </p>

                <div className="space-y-4">
                  {/** Các sub-card */}
                  <div className="p-4 bg-[#FFECC0] rounded-lg border border-border animate-fade-in-up [animation-delay:350ms]">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-primary w-5 h-5 animate-bounce"
                        icon="lucide:git-branch"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        Chưa đồng bộ
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Thể chế kinh tế thị trường định hướng xã hội chủ nghĩa còn
                      chưa hoàn chỉnh và thiếu sự nhất quán.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FFECC0] rounded-lg border border-border animate-fade-in-up [animation-delay:400ms]">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-primary w-5 h-5 animate-bounce"
                        icon="lucide:activity"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        Chưa đầy đủ và hiệu quả
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Hệ thống thể chế còn thiếu sót, hiệu lực và hiệu quả thi
                      hành còn thấp.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* --- 2.2. Khái niệm về thể chế --- */}
            <motion.div
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.6 }}
              whileHover="hover"
              whileInView="visible"
            >
              <Card className="p-6 border-l-4 border-accent h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: 0 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center"
                    initial={{ y: -10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:book-open"
                    />
                  </motion.div>
                  <motion.h2
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    2.2. Khái niệm về thể chế
                  </motion.h2>
                </div>

                {/* Sub-cards */}
                <div className="space-y-6">
                  <motion.div
                    className="p-4 bg-[#FFECC0] rounded-lg border border-border"
                    variants={subCardVariants}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-primary w-5 h-5"
                        icon="lucide:scroll"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        Thể chế
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Là tổng thể các quy tắc, luật pháp, bộ máy và cơ chế vận
                      hành để điều chỉnh hoạt động của con người trong một xã
                      hội.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-[#FFECC0] rounded-lg border border-border"
                    variants={subCardVariants}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-primary w-5 h-5"
                        icon="lucide:scale"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        Thể chế kinh tế
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Là hệ thống các quy tắc, luật pháp và bộ máy quản lý nhằm
                      điều chỉnh hành vi của các chủ thể kinh tế và các hoạt
                      động sản xuất kinh doanh.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30"
                    variants={subCardVariants}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-primary w-5 h-5"
                        icon="lucide:network"
                      />
                      <h3 className="font-semibold text-lg text-primary">
                        Thể chế kinh tế thị trường định hướng XHCN
                      </h3>
                    </div>
                    <p className="leading-relaxed text-foreground">
                      Là hệ thống đường lối, chủ trương, luật pháp và chính sách
                      nhằm xác lập cơ chế vận hành, điều chỉnh các chủ thể kinh
                      tế để hướng tới việc hình thành đồng bộ các yếu tố thị
                      trường.
                    </p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Section2;
