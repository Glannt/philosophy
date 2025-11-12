import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";

const Section1 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen rounded-2xl shadow-md">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-9xl mx-auto space-y-8">
            {/* Title */}
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "circIn",
                easings: [0, 0.41, 0.1, 0.5],
              }}
            >
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent animate-fade-in-up">
                1. Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam
              </h1>
            </motion.div>

            {/* --- 1.1 --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto">
              <motion.div
                animate={{ opacity: 1, scale: 1, x: 0 }}
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
              >
                <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 text-primary-foreground"
                        icon="lucide:lightbulb"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-primary">
                      1.1. Khái niệm và tính tất yếu
                    </h2>
                  </div>

                  <div className="space-y-4 text-foreground">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Khái niệm:</h3>
                      <p className="leading-relaxed">
                        Kinh tế thị trường định hướng xã hội chủ nghĩa là một mô
                        hình kinh tế đặc thù, nơi nền kinh tế vận hành theo các
                        quy luật của thị trường nhưng đồng thời cũng hướng tới
                        mục tiêu xác lập một xã hội{" "}
                        <strong>
                          &quot;dân giàu, nước mạnh, dân chủ, công bằng, văn
                          minh&quot;
                        </strong>
                        . Mô hình này chịu sự điều tiết của Nhà nước và sự lãnh
                        đạo của Đảng Cộng sản Việt Nam.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Tính tất yếu:
                      </h3>
                      <p className="leading-relaxed">
                        Việc phát triển mô hình kinh tế này được xem là một xu
                        hướng khách quan, phù hợp với điều kiện và định hướng
                        phát triển của Việt Nam.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              {/* RIGHT: Image */}

              <motion.div
                animate={{ opacity: 1, scale: 1, x: 0 }}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
              >
                <div className="ml-4">
                  <Image
                    alt="Vietnam Economic Development"
                    className="rounded-xl shadow-md object-cover w-full max-w-md md:max-w-lg mx-auto"
                    height={300}
                    src="/assets/hinhvietnamcnxh.jpg"
                    width={500}
                  />
                </div>
              </motion.div>
            </div>

            {/* --- 1.2 --- */}
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                type: "tween",
              }}
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
                    1.2. Các đặc trưng cơ bản
                  </h2>
                </div>

                <p className="mb-4 text-muted-foreground">
                  Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam
                  vừa mang những đặc điểm chung của kinh tế thị trường toàn cầu,
                  vừa có những nét đặc thù riêng.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Mục tiêu */}
                    <div className="p-4 bg-[#FFECC0] dark:bg-[#BFA36F] rounded-lg">
                      <div className="flex items-center gap-12 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:target"
                        />
                        <h3 className="font-semibold text-lg text-primary">
                          Về mục tiêu
                        </h3>
                      </div>
                      <p className="leading-relaxed">
                        Mục tiêu cao nhất là phát triển lực lượng sản xuất, xây
                        dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội,
                        không ngừng nâng cao đời sống nhân dân và thực hiện mục
                        tiêu{" "}
                        <strong>
                          &quot;dân giàu, nước mạnh, dân chủ, công bằng, văn
                          minh&quot;
                        </strong>
                        .
                      </p>
                    </div>
                    <Image
                      alt="hinh muc tieu"
                      height={200}
                      sizes="sm"
                      src="/assets/dangiau-nuocmanh.jpg"
                      width={400}
                    />
                  </div>
                  {/* Sở hữu */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    <div className="pl-30">
                      <Image
                        alt="hinh muc tieu"
                        height={200}
                        src="/assets/ve-quan-he-so-huu-trong-nen-kinh-te-thi-truong-dinh-huong-xhcn-o-nuoc-ta-hien-nay.jpg"
                        width={300}
                      />
                    </div>

                    <div className="p-4 bg-[#FFECC0] dark:bg-[#BFA36F] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:buildings"
                        />
                        <h3 className="font-semibold text-lg text-primary">
                          Về quan hệ sở hữu và thành phần kinh tế
                        </h3>
                      </div>
                      <p className="leading-relaxed">
                        Nền kinh tế thừa nhận sự tồn tại của nhiều hình thức sở
                        hữu và nhiều thành phần kinh tế. Trong đó, kinh tế nhà
                        nước giữ vai trò chủ đạo, và kinh tế tư nhân được coi là
                        một động lực quan trọng của sự phát triển.
                      </p>
                    </div>
                  </div>

                  {/* Quản lý */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    <div className="p-4 bg-[#FFECC0] dark:bg-[#BFA36F] rounded-lg ">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:gavel"
                        />
                        <h3 className="font-semibold text-lg text-primary">
                          Về quan hệ quản lý
                        </h3>
                      </div>
                      <p className="leading-relaxed">
                        Nhà nước quản lý nền kinh tế thông qua một nhà nước pháp
                        quyền xã hội chủ nghĩa, hoạt động vì lợi ích của nhân
                        dân, dưới sự lãnh đạo của Đảng Cộng sản và có sự giám
                        sát của nhân dân.
                      </p>
                    </div>
                    <div className="pl-30">
                      <Image
                        alt="hinh muc tieu"
                        height={200}
                        sizes="sm"
                        src="/assets/quanhe-quanly.jpg"
                        width={300}
                      />
                    </div>
                  </div>

                  {/* Phân phối */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    <div className="pl-30">
                      <Image
                        alt="hinh muc tieu"
                        height={200}
                        sizes="sm"
                        src="/assets/phanphoi.png"
                        width={300}
                      />
                    </div>
                    <div className="p-4 bg-[#FFECC0] dark:bg-[#BFA36F] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:coins"
                        />
                        <h3 className="font-semibold text-lg text-primary">
                          Về quan hệ phân phối
                        </h3>
                      </div>
                      <p className="leading-relaxed">
                        Thực hiện đa dạng các hình thức phân phối, trong đó chủ
                        yếu là phân phối theo lao động, hiệu quả kinh tế và phân
                        phối theo phúc lợi xã hội.
                      </p>
                    </div>
                  </div>

                  {/* Kinh tế - xã hội */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    <div className="p-4 bg-[#FFECC0] dark:bg-[#BFA36F] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          className="text-primary w-5 h-5"
                          icon="lucide:heart-pulse"
                        />
                        <h3 className="font-semibold text-lg text-primary">
                          Về quan hệ giữa kinh tế và xã hội
                        </h3>
                      </div>
                      <p className="leading-relaxed">
                        Tăng trưởng kinh tế phải luôn đi đôi với việc thực hiện
                        tiến bộ và công bằng xã hội trong từng giai đoạn phát
                        triển.
                      </p>
                    </div>
                    <div className="pl-30">
                      <Image
                        alt="hinh muc tieu"
                        height={200}
                        sizes="sm"
                        src="/assets/phat-trien-ben-vung.jpg"
                        width={350}
                      />
                    </div>
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

export default Section1;
