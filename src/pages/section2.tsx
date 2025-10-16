import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

const Section2 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* --- Tiêu đề chương --- */}
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in-up">
              2. Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ
              nghĩa
            </h1>

            {/* --- 2.1. Sự cần thiết --- */}
            <Card className="p-6 border-l-4 border-primary animate-fade-in-up [animation-delay:100ms] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 text-primary-foreground"
                    icon="lucide:alert-circle"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-primary">
                  2.1. Sự cần thiết
                </h2>
              </div>

              <p className="mb-4 leading-relaxed text-foreground">
                Việc hoàn thiện thể chế là một yêu cầu cấp bách vì hệ thống thể
                chế kinh tế thị trường ở Việt Nam vẫn còn nhiều hạn chế:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      className="text-primary w-5 h-5"
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

                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      className="text-primary w-5 h-5"
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

            {/* --- 2.2. Khái niệm về thể chế --- */}
            <Card className="p-6 border-l-4 border-accent animate-fade-in-up [animation-delay:200ms] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 text-primary-foreground"
                    icon="lucide:book-open"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-primary">
                  2.2. Khái niệm về thể chế
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
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
                    hành để điều chỉnh hoạt động của con người trong một xã hội.
                  </p>
                </div>

                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
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
                    điều chỉnh hành vi của các chủ thể kinh tế và các hoạt động
                    sản xuất kinh doanh.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30">
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
                    nhằm xác lập cơ chế vận hành, điều chỉnh các chủ thể kinh tế
                    để hướng tới việc hình thành đồng bộ các yếu tố thị trường.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Section2;
