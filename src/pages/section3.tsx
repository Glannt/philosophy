import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
  hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
};

const subCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section3 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* --- Tiêu đề chương --- */}
            <motion.h1
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              3. Các quan hệ lợi ích kinh tế ở Việt Nam
            </motion.h1>

            {/* --- 3.1 --- */}
            <motion.div
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              whileInView="visible"
            >
              <Card className="p-6 border-l-4 border-primary h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: 0, opacity: 1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center"
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:hand-coins"
                    />
                  </motion.div>
                  <motion.h2
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    3.1. Lợi ích kinh tế và quan hệ lợi ích kinh tế
                  </motion.h2>
                </div>

                {/* Nội dung */}
                <motion.div className="space-y-6" variants={subCardVariants}>
                  {/* Sub-card: Lợi ích kinh tế */}
                  <motion.div variants={subCardVariants}>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Lợi ích kinh tế
                    </h3>
                    <p className="leading-relaxed mb-4 text-foreground">
                      Là lợi ích vật chất thu được từ các hoạt động kinh tế của
                      con người...
                    </p>
                    <div className="p-4 bg-[#FFECC0] rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:rocket"
                        />
                        <h4 className="font-semibold text-primary">
                          Vai trò của lợi ích kinh tế
                        </h4>
                      </div>
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        <li>
                          Là động lực trực tiếp thúc đẩy hoạt động kinh tế – xã
                          hội.
                        </li>
                        <li>
                          Góp phần phát triển các lợi ích khác như chính trị,
                          văn hóa, xã hội.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Sub-card: Quan hệ lợi ích */}
                  <motion.div variants={subCardVariants}>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Quan hệ lợi ích kinh tế
                    </h3>
                    <p className="leading-relaxed text-foreground">
                      Là sự tương tác giữa các chủ thể kinh tế nhằm xác lập và
                      phân chia lợi ích...
                    </p>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>

            {/* --- 3.2 --- */}
            <motion.div
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              whileInView="visible"
            >
              <Card className="p-6 border-l-4 border-accent h-full">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: 0, opacity: 1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center"
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:layers"
                    />
                  </motion.div>
                  <motion.h2
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    3.2. Các nhân tố ảnh hưởng và phương thức thực hiện
                  </motion.h2>
                </div>

                <motion.div className="space-y-6" variants={subCardVariants}>
                  <motion.div variants={subCardVariants}>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Các nhân tố ảnh hưởng đến lợi ích kinh tế
                    </h3>
                    <div className="grid gap-3">
                      <div className="p-3 bg-[#FFECC0] rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:cpu"
                        />
                        Trình độ phát triển của lực lượng sản xuất
                      </div>
                      <div className="p-3 bg-[#FFECC0] rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:users"
                        />
                        Địa vị của chủ thể trong hệ thống quan hệ sản xuất
                      </div>
                      <div className="p-3 bg-[#FFECC0] rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:scale"
                        />
                        Chính sách phân phối thu nhập của Nhà nước
                      </div>
                      <div className="p-3 bg-[#FFECC0] rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:globe"
                        />
                        Mức độ hội nhập kinh tế quốc tế
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={subCardVariants}>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Phương thức thực hiện lợi ích kinh tế
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border-l-4 border-primary">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:trending-up"
                        />
                        Thực hiện lợi ích kinh tế theo nguyên tắc thị trường
                      </div>
                      <div className="p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg border-l-4 border-accent">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-accent"
                          icon="lucide:building"
                        />
                        Thực hiện lợi ích kinh tế theo chính sách của Nhà nước
                        và vai trò các tổ chức xã hội
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>

            {/* --- 3.3 --- */}
            <motion.div
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              whileInView="visible"
            >
              <Card className="p-6 border-l-4 border-primary bg-gradient-to-br from-card to-secondary/20 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: 0, opacity: 1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center"
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:landmark"
                    />
                  </motion.div>
                  <motion.h2
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    3.3. Vai trò của Nhà nước trong việc đảm bảo hài hòa các
                    quan hệ lợi ích
                  </motion.h2>
                </div>

                <motion.div className="space-y-4" variants={subCardVariants}>
                  {[
                    {
                      icon: "lucide:shield-check",
                      title:
                        "1. Bảo vệ lợi ích hợp pháp và tạo môi trường thuận lợi",
                      text: "Xây dựng hệ thống pháp luật minh bạch, ổn định chính trị...",
                    },
                    {
                      icon: "lucide:scale",
                      title:
                        "2. Điều hòa lợi ích giữa cá nhân – doanh nghiệp – xã hội",
                      text: "Ban hành các chính sách phân phối thu nhập hợp lý...",
                    },
                    {
                      icon: "lucide:alert-triangle",
                      title:
                        "3. Kiểm soát và ngăn ngừa các quan hệ lợi ích tiêu cực",
                      text: "Khuyến khích làm giàu hợp pháp, chống tham nhũng...",
                    },
                    {
                      icon: "lucide:balance-scale",
                      title: "4. Giải quyết các mâu thuẫn",
                      text: "Cơ quan Nhà nước cần chủ động phát hiện, hòa giải...",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 bg-card rounded-lg border border-border"
                      variants={subCardVariants}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="w-5 h-5 text-primary"
                          icon={item.icon}
                        />
                        <h3 className="font-semibold text-primary">
                          {item.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Section3;
