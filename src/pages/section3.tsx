import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";

const Section3 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* --- Tiêu đề chương --- */}
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in-up">
              3. Các quan hệ lợi ích kinh tế ở Việt Nam
            </h1>

            {/* --- 3.1 --- */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:hand-coins"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    3.1. Lợi ích kinh tế và quan hệ lợi ích kinh tế
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Lợi ích kinh tế
                    </h3>
                    <p className="leading-relaxed mb-4 text-foreground">
                      Là lợi ích vật chất thu được từ các hoạt động kinh tế của
                      con người. Nó phản ánh mục đích và động cơ của các chủ thể
                      trong nền sản xuất xã hội — ví dụ như lợi nhuận của doanh
                      nghiệp hay thu nhập của người lao động.
                    </p>

                    <div className="p-4 bg-secondary/50 rounded-lg border border-border">
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
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Quan hệ lợi ích kinh tế
                    </h3>
                    <p className="leading-relaxed text-foreground">
                      Là sự tương tác giữa các chủ thể kinh tế nhằm xác lập và
                      phân chia lợi ích. Quan hệ này vừa có sự thống nhất khi
                      cùng hướng tới mục tiêu chung, vừa có thể phát sinh mâu
                      thuẫn do khác biệt trong phương thức thực hiện lợi ích.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* --- 3.2 --- */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 border-l-4 border-accent animate-fade-in-up [animation-delay:200ms] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:layers"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    3.2. Các nhân tố ảnh hưởng và phương thức thực hiện
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Các nhân tố ảnh hưởng đến lợi ích kinh tế
                    </h3>
                    <div className="grid gap-3">
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:cpu"
                        />
                        Trình độ phát triển của lực lượng sản xuất
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:users"
                        />
                        Địa vị của chủ thể trong hệ thống quan hệ sản xuất
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:scale"
                        />
                        Chính sách phân phối thu nhập của Nhà nước
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <Icon
                          className="inline w-5 h-5 mr-2 text-primary"
                          icon="lucide:globe"
                        />
                        Mức độ hội nhập kinh tế quốc tế
                      </div>
                    </div>
                  </div>

                  <div>
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
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* --- 3.3 --- */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 border-l-4 border-primary bg-gradient-to-br from-card to-secondary/20 animate-fade-in-up [animation-delay:300ms] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-primary-foreground"
                      icon="lucide:landmark"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    3.3. Vai trò của Nhà nước trong việc đảm bảo hài hòa các
                    quan hệ lợi ích
                  </h2>
                </div>

                <p className="mb-4 leading-relaxed text-foreground">
                  Nhà nước giữ vai trò then chốt trong việc điều hòa và cân bằng
                  lợi ích giữa các chủ thể kinh tế:
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="w-5 h-5 text-primary"
                        icon="lucide:shield-check"
                      />
                      <h3 className="font-semibold text-primary">
                        1. Bảo vệ lợi ích hợp pháp và tạo môi trường thuận lợi
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Xây dựng hệ thống pháp luật minh bạch, ổn định chính trị
                      và đầu tư hạ tầng để bảo vệ lợi ích chính đáng của các chủ
                      thể kinh tế.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="w-5 h-5 text-primary"
                        icon="lucide:scale"
                      />
                      <h3 className="font-semibold text-primary">
                        2. Điều hòa lợi ích giữa cá nhân – doanh nghiệp – xã hội
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Ban hành các chính sách phân phối thu nhập hợp lý, hướng
                      tới công bằng và phát triển bền vững.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="w-5 h-5 text-primary"
                        icon="lucide:alert-triangle"
                      />
                      <h3 className="font-semibold text-primary">
                        3. Kiểm soát và ngăn ngừa các quan hệ lợi ích tiêu cực
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Khuyến khích làm giàu hợp pháp, chống tham nhũng, nâng cao
                      nhận thức xã hội về công bằng và minh bạch.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="w-5 h-5 text-primary"
                        icon="lucide:balance-scale"
                      />
                      <h3 className="font-semibold text-primary">
                        4. Giải quyết các mâu thuẫn
                      </h3>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      Cơ quan Nhà nước cần chủ động phát hiện, hòa giải và xử lý
                      kịp thời các mâu thuẫn phát sinh trong quan hệ lợi ích
                      kinh tế.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Section3;
